
import { describe, expect, test, beforeAll, afterAll, beforeEach } from "bun:test";
import { Pool } from 'pg';
import { v4 as uuidv4 } from 'uuid';
import { AcquireService } from '../../service/acquire_service';
import { PostgresRateLimitRepository } from '../../persistence/pg_repository';
import { Logger, AcquireResultStatus } from '../../domain/types';

// Simple Logger
const logger: Logger = {
    info: () => { },
    error: (msg, meta) => console.error(msg, meta),
    warn: () => { },
};

const CONNECTION_STRING = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/ratelimiter';

describe("AcquireService Integration", () => {
    let pool: Pool;
    let repo: PostgresRateLimitRepository;
    let service: AcquireService;

    beforeAll(async () => {
        pool = new Pool({ connectionString: CONNECTION_STRING });
        // Ensure connection works
        const client = await pool.connect();
        client.release();

        repo = new PostgresRateLimitRepository(CONNECTION_STRING);
        service = new AcquireService(repo, logger, {
            maxRetries: 3,
            baseBackoffMs: 10,
            maxBackoffMs: 100,
            defaultCapacity: 10,
            defaultRefillRate: 10 // 10 tokens/sec
        });
    });

    afterAll(async () => {
        await repo.close();
        await pool.end();
    });

    beforeEach(async () => {
        // Clean up DB before each test
        const client = await pool.connect();
        try {
            await client.query('TRUNCATE TABLE rate_limit_buckets, idempotency_keys');
        } finally {
            client.release();
        }
    });

    test("Basic Flow: Acquire matches", async () => {
        const requestId = uuidv4();
        const key = "user:123";
        const result = await service.acquire({ requestId }, key, 5);

        expect(result.status).toBe(AcquireResultStatus.ALLOWED);
        expect(result.tokensRemaining).toBe(5); // 10cap - 5cost = 5
    });

    test("Basic Flow: Acquire exceeds capacity", async () => {
        const requestId = uuidv4();
        const key = "user:exhausted";
        // Cost > Capacity
        const result = await service.acquire({ requestId }, key, 20);

        expect(result.status).toBe(AcquireResultStatus.DENIED);
        expect(result.waitTimeMs).toBeGreaterThan(0);
    });

    test("Idempotency: Replaying request returns same result", async () => {
        const requestId = uuidv4();
        const key = "user:replay";

        // First call
        const res1 = await service.acquire({ requestId }, key, 2);

        // Second call
        const res2 = await service.acquire({ requestId }, key, 2);

        expect(res1.status).toBe(AcquireResultStatus.ALLOWED);
        expect(res2.status).toBe(AcquireResultStatus.ALLOWED);
        expect(res1.tokensRemaining).toBe(res2.tokensRemaining);

        // Verify only 2 tokens total consumed, not 4
        // Logic: if result is idempotent, updating bucket didn't happen twice.
        // We can verify by querying remaining tokens with a NEW request
        const res3 = await service.acquire({ requestId: uuidv4() }, key, 0);
        // 10 - 2 = 8. (Ignore small refill)
        expect(res3.tokensRemaining).toBeCloseTo(8, 0);
    });

    test("Concurrency: Serializability check", async () => {
        // We launch N requests in parallel for the SAME KEY.
        // Total cost = N. 
        // Capacity = 10.
        // If N=20, exactly 10 should succeed.

        const key = "user:concurrent";
        const N = 20;
        const promises = [];

        for (let i = 0; i < N; i++) {
            promises.push(service.acquire({ requestId: uuidv4() }, key, 1));
        }


        const results = await Promise.allSettled(promises);

        const allowed = results.filter(r => r.status === 'fulfilled' && r.value.status === AcquireResultStatus.ALLOWED).length;
        const denied = results.filter(r => r.status === 'fulfilled' && r.value.status === AcquireResultStatus.DENIED).length;
        const errors = results.filter(r => r.status === 'rejected').length;

        console.log(`Concurrency Test: Allowed=${allowed}, Denied=${denied}, Errors=${errors}`);

        // The MOST important check: We strictly cannot go over capacity (10).
        expect(allowed).toBeLessThanOrEqual(10);

        // We expect mostly success/denied, but some errors under extreme contention are possible.
        // If we have errors, the sum of allowed+denied will be < 20.
        // We can assert that at least SOME succeeded.
        expect(allowed).toBeGreaterThan(0);

    });

    test("Independence: Different keys do not block", async () => {
        const key1 = "user:A";
        const key2 = "user:B";

        // Drain A
        await service.acquire({ requestId: uuidv4() }, key1, 10);

        // B should still be fresh
        const resB = await service.acquire({ requestId: uuidv4() }, key2, 5);
        expect(resB.status).toBe(AcquireResultStatus.ALLOWED);
    });
});
