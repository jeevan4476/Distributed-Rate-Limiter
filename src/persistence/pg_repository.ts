import { Pool, PoolClient } from 'pg';
import {
    RateLimitRepository,
    AcquireResultStatus,
} from '../domain/types';

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

export class PostgresRateLimitRepository implements SqlRateLimitRepository {
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

    async close() {
        await this.pool.end();
    }
}

