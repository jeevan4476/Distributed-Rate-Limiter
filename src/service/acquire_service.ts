import { PoolClient } from 'pg';
import {
    AcquireResult,
    AcquireResultStatus,
    FatalError,
    Logger
} from '../domain/types';
import { SqlRateLimitRepository } from '../persistence/pg_repository';
import { calculateTokenConsumption } from '../domain/token_bucket';

export interface RateLimitConfig {
    maxRetries: number;
    baseBackoffMs: number;
    maxBackoffMs: number;
    defaultCapacity: number;
    defaultRefillRate: number;
}

export class AcquireService {
    constructor(
        private repo: SqlRateLimitRepository & { getPool(): any },
        private logger: Logger,
        private config: RateLimitConfig
    ) { }

    async acquire(
        ctx: { requestId: string },
        logicalKey: string,
        cost: number
    ): Promise<AcquireResult> {
        let attempt = 0;
        const start = Date.now();

        while (true) {
            attempt++;
            const client: PoolClient = await this.repo.getPool().connect();

            try {
                // 1. Start Transaction
                await client.query('BEGIN ISOLATION LEVEL SERIALIZABLE');

                // 2. Check Idempotency
                const cachedRes = await this.repo.getIdempotencyKey(client, ctx.requestId);
                if (cachedRes) {
                    await client.query('COMMIT');
                    this.logResult(ctx.requestId, logicalKey, cost, attempt, Date.now() - start, cachedRes, true);
                    return cachedRes;
                }

                // 3. Get or Create Bucket
                let bucket = await this.repo.getBucketForUpdate(client, logicalKey);
                if (!bucket) {
                    bucket = await this.repo.createBucket(client, logicalKey, {
                        capacity: this.config.defaultCapacity,
                        refillRate: this.config.defaultRefillRate,
                        now: new Date()
                    });
                }

                // 4. Pure Domain Logic
                const nowMs = Date.now();
                const result = calculateTokenConsumption(
                    {
                        tokens: bucket.tokens,
                        lastRefillAt: bucket.lastRefillAt
                    },
                    cost,
                    nowMs,
                    bucket.capacity,
                    bucket.refillRate
                );

                // 5. Update Bucket
                await this.repo.updateBucketState(
                    client,
                    logicalKey,
                    result.newTokens,
                    new Date(result.newLastRefillAt)
                );

                // 6. Save Idempotency
                const acquireResult: AcquireResult = {
                    status: result.verdict,
                    tokensRemaining: result.newTokens,
                    waitTimeMs: result.waitTimeMs
                };

                await this.repo.saveIdempotencyKey(
                    client,
                    ctx.requestId,
                    logicalKey,
                    acquireResult
                );

                // 7. Commit
                await client.query('COMMIT');
                this.logResult(ctx.requestId, logicalKey, cost, attempt, Date.now() - start, acquireResult, false);
                return acquireResult;

            } catch (err: any) {
                await client.query('ROLLBACK');

                // Retry Logic
                if (err.code === '40001' || err.code === '40P01') {
                    if (attempt > this.config.maxRetries) {
                        this.logger.error('Max retries exhausted for serialization failure', {
                            requestId: ctx.requestId,
                            attempts: attempt
                        });
                        throw new FatalError('Max retries exceeded', err);
                    }

                    const backoff = Math.min(
                        this.config.maxBackoffMs,
                        this.config.baseBackoffMs * Math.pow(2, attempt - 1)
                    );
                    const jitter = Math.random() * (backoff * 0.1);
                    await new Promise(r => setTimeout(r, backoff + jitter));
                    continue;
                }

                this.logger.error('Fatal error during acquire', {
                    requestId: ctx.requestId,
                    error: err
                });
                throw new FatalError('Database error', err);
            } finally {
                client.release();
            }
        }
    }

    private logResult(
        requestId: string,
        key: string,
        cost: number,
        attempts: number,
        durationMs: number,
        result: AcquireResult,
        idempotent: boolean
    ) {
        this.logger.info('acquire_completed', {
            request_id: requestId,
            logical_key: key,
            verdict: result.status,
            cost,
            attempts,
            duration_ms: durationMs,
            tokens_remaining: result.tokensRemaining,
            wait_time_ms: result.waitTimeMs,
            idempotent_hit: idempotent
        });
    }
}
