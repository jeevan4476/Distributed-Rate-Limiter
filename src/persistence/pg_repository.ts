import { Pool, PoolClient } from 'pg';
import {
    RateLimitRepository,
    AdminRepository,
    AcquireResultStatus,
    AcquireResult,
    SerializationError,
    DeadlockError
} from '../domain/types';
import { calculateTokenConsumption } from '../domain/token_bucket';

// New interface for the SQL-only repository
export interface SqlRateLimitRepository {
    getBucketForUpdate(client: PoolClient, key: string): Promise<{
        tokens: number;
        lastRefillAt: number;
        capacity: number;
        refillRate: number;
    } | null>;

    createBucket(
        client: PoolClient,
        key: string,
        defaults: { capacity: number; refillRate: number; now: Date }
    ): Promise<{
        tokens: number;
        lastRefillAt: number;
        capacity: number;
        refillRate: number;
    }>;

    updateBucketState(
        client: PoolClient,
        key: string,
        tokens: number,
        lastRefillAt: Date
    ): Promise<void>;

    getIdempotencyKey(
        client: PoolClient,
        requestId: string
    ): Promise<{
        status: AcquireResultStatus;
        tokensRemaining: number;
        waitTimeMs: number;
    } | null>;

    saveIdempotencyKey(
        client: PoolClient,
        requestId: string,
        bucketKey: string,
        result: {
            status: AcquireResultStatus;
            tokensRemaining: number;
            waitTimeMs: number;
        }
    ): Promise<void>;
}

export class PostgresRateLimitRepository implements SqlRateLimitRepository, RateLimitRepository, AdminRepository {
    private pool: Pool;

    constructor(connectionString: string) {
        this.pool = new Pool({
            connectionString,
            max: 20,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 2000,
        });
    }

    // Expose pool to service for transaction management
    getPool(): Pool {
        return this.pool;
    }


    async acquire(
        ctx: { requestId: string },
        logicalKey: string,
        cost: number,
        defaultCapacity: number,
        defaultRefillRate: number
    ): Promise<AcquireResult> {
        try {
            // High-throughput 1-RTT execution via atomic PL/pgSQL function
            const res = await this.pool.query(
                `SELECT result_status, tokens_remaining, wait_time_ms 
                 FROM fn_acquire_rate_limit_token($1, $2, $3, $4, $5, NOW())`,
                [ctx.requestId, logicalKey, cost, defaultCapacity, defaultRefillRate]
            );

            const row = res.rows[0];
            return {
                status: row.result_status as AcquireResultStatus,
                tokensRemaining: parseFloat(row.tokens_remaining),
                waitTimeMs: parseInt(row.wait_time_ms, 10)
            };
        } catch (err: any) {
            // Fallback to explicit transaction if stored procedure is not defined in DB
            if (err.code === '42883') {
                return this.acquireWithClientTx(ctx, logicalKey, cost, defaultCapacity, defaultRefillRate);
            }
            if (err.code === '40001') {
                throw new SerializationError(err.message);
            }
            if (err.code === '40P01') {
                throw new DeadlockError(err.message);
            }
            throw err;
        }
    }

    async acquireWithClientTx(
        ctx: { requestId: string },
        logicalKey: string,
        cost: number,
        defaultCapacity: number,
        defaultRefillRate: number
    ): Promise<AcquireResult> {
        const client: PoolClient = await this.pool.connect();
        try{
            await client.query('BEGIN ISOLATION LEVEL SERIALIZABLE');

            const cached = await this.getIdempotencyKey(client,ctx.requestId);
            if(cached){
                await client.query('COMMIT');
                return cached;
            }

            let bucket = await this.getBucketForUpdate(client,logicalKey);
            if (!bucket) {
            bucket = await this.createBucket(client, logicalKey, {
                capacity: defaultCapacity,
                refillRate: defaultRefillRate,
                now: new Date()
            });
            }
            const result = calculateTokenConsumption(
                { tokens: bucket.tokens, lastRefillAt: bucket.lastRefillAt },
                cost,
                Date.now(),
                bucket.capacity,
                bucket.refillRate
            );
            await this.updateBucketState(
                client,
                logicalKey,
                result.newTokens,
                new Date(result.newLastRefillAt)
            );

            const acquireResult: AcquireResult = {
                status: result.verdict,
                tokensRemaining: result.newTokens,
                waitTimeMs: result.waitTimeMs
            };

            await this.saveIdempotencyKey(client, ctx.requestId, logicalKey, acquireResult);

            await client.query('COMMIT');
            return acquireResult;
        }
        catch(err: any){
            await client.query('ROLLBACK');
            if (err.code === '40001') {
                throw new SerializationError(err.message);
            }
            if (err.code === '40P01') {
                throw new DeadlockError(err.message);
            }
            throw err;
        }finally{
            client.release();
        }
    }
    
    async getBucketForUpdate(client: PoolClient, key: string) {
        const res = await client.query(
            `SELECT tokens, last_refill_at, capacity, refill_rate 
             FROM rate_limit_buckets 
             WHERE key = $1 
             FOR UPDATE`,
            [key]
        );

        if (res.rows.length === 0) return null;

        return {
            tokens: parseFloat(res.rows[0].tokens),
            lastRefillAt: new Date(res.rows[0].last_refill_at).getTime(),
            capacity: parseFloat(res.rows[0].capacity),
            refillRate: parseFloat(res.rows[0].refill_rate)
        };
    }

    async createBucket(
        client: PoolClient,
        key: string,
        defaults: { capacity: number; refillRate: number; now: Date }
    ) {
        const res = await client.query(
            `INSERT INTO rate_limit_buckets (key, tokens, last_refill_at, capacity, refill_rate)
             VALUES ($1, $2, $3, $2, $4)
             ON CONFLICT (key) DO UPDATE 
             SET updated_at = NOW() 
             RETURNING tokens, last_refill_at, capacity, refill_rate`,
            [key, defaults.capacity, defaults.now, defaults.refillRate]
        );

        return {
            tokens: parseFloat(res.rows[0].tokens),
            lastRefillAt: new Date(res.rows[0].last_refill_at).getTime(),
            capacity: parseFloat(res.rows[0].capacity),
            refillRate: parseFloat(res.rows[0].refill_rate)
        };
    }

    async updateBucketState(
        client: PoolClient,
        key: string,
        tokens: number,
        lastRefillAt: Date
    ) {
        await client.query(
            `UPDATE rate_limit_buckets 
             SET tokens = $1, last_refill_at = $2 
             WHERE key = $3`,
            [tokens, lastRefillAt, key]
        );
    }

    async getIdempotencyKey(client: PoolClient, requestId: string) {
        const res = await client.query(
            `SELECT result_status, tokens_remaining, wait_time_ms 
             FROM idempotency_keys 
             WHERE request_id = $1`,
            [requestId]
        );

        if (res.rows.length === 0) return null;

        return {
            status: res.rows[0].result_status as AcquireResultStatus,
            tokensRemaining: parseFloat(res.rows[0].tokens_remaining),
            waitTimeMs: parseInt(res.rows[0].wait_time_ms, 10),
        };
    }

    async saveIdempotencyKey(
        client: PoolClient,
        requestId: string,
        bucketKey: string,
        result: {
            status: AcquireResultStatus;
            tokensRemaining: number;
            waitTimeMs: number;
        }
    ) {
        await client.query(
            `INSERT INTO idempotency_keys (request_id, bucket_key, result_status, tokens_remaining, wait_time_ms)
             VALUES ($1, $2, $3, $4, $5)`,
            [requestId, bucketKey, result.status, result.tokensRemaining, result.waitTimeMs]
        );
    }

    async ping(): Promise<boolean> {
        try {
            await this.pool.query('SELECT 1');
            return true;
        } catch {
            return false;
        }
    }

    async resetBucket(key: string): Promise<number> {
        const res = await this.pool.query(
            `UPDATE rate_limit_buckets
             SET tokens = capacity, last_refill_at = NOW()
             WHERE key = $1
             RETURNING tokens`,
            [key]
        );
        if (res.rows.length === 0) throw new Error(`Bucket not found: ${key}`);
        return parseFloat(res.rows[0].tokens);
    }

    async getBucketStats(key: string) {
        const res = await this.pool.query(
            `SELECT key, tokens, capacity, refill_rate
             FROM rate_limit_buckets WHERE key = $1`,
            [key]
        );
        if (res.rows.length === 0) throw new Error(`Bucket not found: ${key}`);
        const row = res.rows[0];
        const tokens = parseFloat(row.tokens);
        const capacity = parseFloat(row.capacity);
        const refillRate = parseFloat(row.refill_rate);
        return {
            key: row.key,
            tokens,
            capacity,
            refillRate,
            fillPercent: capacity > 0 ? (tokens / capacity) * 100 : 0
        };
    }

    async listBuckets() {
        const res = await this.pool.query(
            `SELECT key, tokens, capacity, refill_rate FROM rate_limit_buckets`
        );
        return res.rows.map(row => {
            const tokens = parseFloat(row.tokens);
            const capacity = parseFloat(row.capacity);
            const refillRate = parseFloat(row.refill_rate);
            return {
                key: row.key,
                tokens,
                capacity,
                refillRate,
                fillPercent: capacity > 0 ? (tokens / capacity) * 100 : 0
            };
        });
    }

    async close() {
        await this.pool.end();
    }
}

