import {
    RateLimitRepository,
    Logger,
    AcquireResult,
    AcquireResultStatus,
    SerializationError,
    DeadlockError,
    FatalError
} from './types';

export interface RateLimitConfig {
    maxRetries: number;
    baseBackoffMs: number;
    maxBackoffMs: number;
    defaultCapacity: number;
    defaultRefillRate: number;
}

export class RateLimitDomainService {
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
                );

                this.logResult(ctx.requestId, logicalKey, cost, attempt, Date.now() - start, result);
                return result;

            } catch (err) {
                if (err instanceof SerializationError || err instanceof DeadlockError) {
                    if (attempt > this.config.maxRetries) {
                        this.logger.error('Max retries exhausted for serialization failure', {
                            requestId: ctx.requestId,
                            attempts: attempt
                        });
                        throw new FatalError('Max retries exceeded', err);
                    }

                    // Backoff
                    const backoff = Math.min(
                        this.config.maxBackoffMs,
                        this.config.baseBackoffMs * Math.pow(2, attempt - 1)
                    );
                    // Add Jitter
                    const jitter = Math.random() * (backoff * 0.1);
                    await new Promise(r => setTimeout(r, backoff + jitter));

                    continue;
                }

                // Fatal
                this.logger.error('Fatal error during acquire', {
                    requestId: ctx.requestId,
                    error: err
                });
                throw err;
            }
        }
    }

    private logResult(
        requestId: string,
        key: string,
        cost: number,
        attempts: number,
        durationMs: number,
        result: AcquireResult
    ) {
        this.logger.info('acquire_completed', {
            request_id: requestId,
            logical_key: key,
            verdict: result.status,
            cost,
            attempts,
            duration_ms: durationMs,
            tokens_remaining: result.tokensRemaining,
            wait_time_ms: result.waitTimeMs
        });
    }
}
