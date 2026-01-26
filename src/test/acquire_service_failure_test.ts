
import { AcquireService, RateLimitConfig } from '../service/acquire_service';
import { SqlRateLimitRepository } from '../persistence/pg_repository';
import { Logger, AcquireResult, AcquireResultStatus, FatalError } from '../domain/types';
import { PoolClient } from 'pg';

// --- Mocks ---

class MockLogger implements Logger {
    info(msg: string, meta?: any) { console.log(`[INFO] ${msg}`, meta); }
    error(msg: string, meta?: any) { console.error(`[ERROR] ${msg}`, meta); }
    warn(msg: string, meta?: any) { console.warn(`[WARN] ${msg}`, meta); }
}

class MockPoolClient {
    queryRequests: any[] = [];
    releaseCalled = false;

    async query(sql: string, params?: any[]) {
        this.queryRequests.push({ sql, params });
        if (sql.includes('BEGIN')) return;
        if (sql.includes('COMMIT')) return;
        if (sql.includes('ROLLBACK')) return;
        return { rows: [] };
    }

    release() {
        this.releaseCalled = true;
    }
}

class MockRepository implements SqlRateLimitRepository {
    poolClient: MockPoolClient;
    // Fault injection config
    getBucketForUpdateError: Error | null = null;
    getBucketForUpdateErrorCount = 0;

    // Data mocks
    idempotencyStore: Map<string, any> = new Map();
    buckets: Map<string, any> = new Map();

    constructor() {
        this.poolClient = new MockPoolClient();
    }

    getPool() {
        return {
            connect: async () => this.poolClient
        };
    }

    async getBucketForUpdate(client: PoolClient, key: string): Promise<any> {
        if (this.getBucketForUpdateError && this.getBucketForUpdateErrorCount > 0) {
            this.getBucketForUpdateErrorCount--;
            throw this.getBucketForUpdateError;
        }
        return this.buckets.get(key) || null;
    }

    async createBucket(client: PoolClient, key: string, defaults: any): Promise<any> {
        const bucket = {
            tokens: defaults.capacity,
            lastRefillAt: defaults.now.getTime(),
            capacity: defaults.capacity,
            refillRate: defaults.refillRate
        };
        this.buckets.set(key, bucket);
        return bucket;
    }

    async updateBucketState(client: PoolClient, key: string, tokens: number, lastRefillAt: Date): Promise<void> {
        const bucket = this.buckets.get(key);
        if (bucket) {
            bucket.tokens = tokens;
            bucket.lastRefillAt = lastRefillAt.getTime();
        }
    }

    async getIdempotencyKey(client: PoolClient, requestId: string): Promise<any> {
        return this.idempotencyStore.get(requestId) || null;
    }

    async saveIdempotencyKey(client: PoolClient, requestId: string, bucketKey: string, result: any): Promise<void> {
        this.idempotencyStore.set(requestId, result);
    }
}

// --- Tests ---

async function runTests() {
    const logger = new MockLogger();
    const config: RateLimitConfig = {
        maxRetries: 3,
        baseBackoffMs: 10,
        maxBackoffMs: 50,
        defaultCapacity: 10,
        defaultRefillRate: 1
    };

    console.log('Starting Failure Tests...\n');

    // 1. Serialization Conflict Test
    {
        console.log('Test 1: Serialization Conflict Retry');
        const repo = new MockRepository();
        // Simulate serialization error (40001) for first 2 attempts
        const serializationError: any = new Error('Serialization faulure');
        serializationError.code = '40001';
        repo.getBucketForUpdateError = serializationError;
        repo.getBucketForUpdateErrorCount = 2;

        const service = new AcquireService(repo as any, logger, config);

        try {
            const result = await service.acquire({ requestId: 'req-1' }, 'key-1', 1);
            if (result.status === AcquireResultStatus.ALLOWED) {
                console.log('PASS: Retried and succeeded');
            } else {
                console.error('FAIL: Status not ALLOWED');
            }
        } catch (e) {
            console.error('FAIL: Should have succeeded after retry', e);
        }
        console.log('---');
    }

    // 2. Deadlock Retry Test
    {
        console.log('Test 2: Deadlock Retry');
        const repo = new MockRepository();
        // Simulate deadlock error (40P01) for first 2 attempts
        const deadlockError: any = new Error('Deadlock detected');
        deadlockError.code = '40P01';
        repo.getBucketForUpdateError = deadlockError;
        repo.getBucketForUpdateErrorCount = 2;

        const service = new AcquireService(repo as any, logger, config);

        try {
            const result = await service.acquire({ requestId: 'req-deadlock' }, 'key-1', 1);
            if (result.status === AcquireResultStatus.ALLOWED) {
                console.log('PASS: Retried and succeeded');
            } else {
                console.error('FAIL: Status not ALLOWED');
            }
        } catch (e) {
            console.error('FAIL: Should have succeeded after retry', e);
        }
        console.log('---');
    }

    // 3. Timeout Fail-closed Test
    {
        console.log('Test 3: Timeout Fail-closed');
        const repo = new MockRepository();
        // Simulate generic error (not retryable)
        const fatalError = new Error('Connection timeout');
        repo.getBucketForUpdateError = fatalError;
        repo.getBucketForUpdateErrorCount = 1;

        const service = new AcquireService(repo as any, logger, config);

        try {
            await service.acquire({ requestId: 'req-timeout' }, 'key-1', 1);
            console.error('FAIL: Should have thrown FatalError');
        } catch (e) {
            if (e instanceof FatalError) {
                console.log('PASS: Threw FatalError as expected');
            } else {
                console.error('FAIL: Threw unexpected error', e);
            }
        }
        console.log('---');
    }

    // 4. Idempotent Replay Test (Recovery)
    {
        console.log('Test 4: Idempotent Replay after Crash');
        const repo = new MockRepository();

        // Pre-populate idempotency store (simulating previous success)
        repo.idempotencyStore.set('req-replay', {
            status: AcquireResultStatus.ALLOWED,
            tokensRemaining: 9,
            waitTimeMs: 0
        });

        const service = new AcquireService(repo as any, logger, config);

        const result = await service.acquire({ requestId: 'req-replay' }, 'key-1', 1);

        if (result.status === AcquireResultStatus.ALLOWED && result.tokensRemaining === 9) {
            console.log('PASS: Returned cached result');
        } else {
            console.error('FAIL: Did not return cached result', result);
        }

        // Verify tokens were NOT consumed again (mock implementation created fresh bucket if not found, but logic should follow idempotency path first)
        // With mock repo specific implementation, createBucket is called only if getBucketForUpdate fails or returns null.
        // But acquire flow checks idempotency FIRST.
        // So createBucket/getBucket should NOT be called if logic is correct.
        // However, checking side effects on Mock is harder unless we spy. 
        // We relied on the returned result matching the store.
        console.log('---');
    }
}

runTests().catch(console.error);
