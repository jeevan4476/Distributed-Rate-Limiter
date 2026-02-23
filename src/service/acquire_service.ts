import { PoolClient } from 'pg';
import {
    AcquireResult,
    AcquireResultStatus,
    FatalError,
    Logger,
    RateLimitRepository
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
        private repo: RateLimitRepository,
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
            try {
                const result = await this.repo.acquire(
                    ctx,
                    logicalKey,
                    cost,
                    this.config.defaultCapacity,
                    this.config.defaultRefillRate 
                )
               
                this.logger.info('acquire_completed', {
                    request_id: ctx.requestId,
                    logical_key: logicalKey,
                    verdict: result.status,
                    cost,
                    attempts: attempt,
                    duration_ms: Date.now() - start,
                    tokens_remaining: result.tokensRemaining,
                    wait_time_ms: result.waitTimeMs
                });

                return result;

            } catch (err: any) {
                // Serialization / deadlock errors are Postgres-specific
                // Redis never throws these (Lua is atomic)
                if (err.code === '40001' || err.code === '40P01') {
                    if (attempt > this.config.maxRetries) {
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

                throw new FatalError('Acquire failed', err);
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
