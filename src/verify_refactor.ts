
import { AcquireService } from './service/acquire_service';
import { PostgresRateLimitRepository } from './persistence/pg_repository';
import { Logger } from './domain/types';
import { v4 as uuidv4 } from 'uuid';

// Simple Console Logger
const logger: Logger = {
    info: (msg, meta) => console.log(`[INFO] ${msg}`, meta ? JSON.stringify(meta) : ''),
    error: (msg, meta) => console.error(`[ERROR] ${msg}`, meta ? JSON.stringify(meta) : ''),
    warn: (msg, meta) => console.warn(`[WARN] ${msg}`, meta ? JSON.stringify(meta) : ''),
};

async function verify() {
    console.log('Starting Verification...');

    // 1. Setup
    // Use env var or default local connection string
    const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/ratelimiter';
    const repo = new PostgresRateLimitRepository(connectionString);

    const service = new AcquireService(repo, logger, {
        maxRetries: 5,
        baseBackoffMs: 100,
        maxBackoffMs: 1000,
        defaultCapacity: 10,
        defaultRefillRate: 1 // 1 token per second
    });

    try {
        // 2. Test Basic Acquisition
        console.log('\n--- Test 1: Basic Acquisition ---');
        const reqId1 = uuidv4();
        const res1 = await service.acquire(
            { requestId: reqId1 },
            'user:test-1',
            5
        );
        console.log('Result 1:', res1);
        if (res1.status !== 'ALLOWED') throw new Error('Expected ALLOWED');

        // 3. Test Idempotency
        console.log('\n--- Test 2: Idempotency ---');
        const res1Replay = await service.acquire(
            { requestId: reqId1 },
            'user:test-1',
            5
        );
        console.log('Result 1 Replay:', res1Replay);
        if (res1Replay.tokensRemaining !== res1.tokensRemaining) throw new Error('Idempotency mismatch');

        // 4. Test Depletion and Waiting
        console.log('\n--- Test 3: Depletion ---');
        const reqId2 = uuidv4();
        // Try to consume 10, but we only have 5 left (capacity 10 - 5 consumed) + small refill
        // Actually, we should check exact math, but simplified check:
        const res2 = await service.acquire(
            { requestId: reqId2 },
            'user:test-1',
            100 // Huge cost
        );
        console.log('Result 2 (Huge Cost):', res2);
        if (res2.status !== 'DENIED') throw new Error('Expected DENIED');
        if (res2.waitTimeMs <= 0) throw new Error('Expected positive wait time');

        console.log('\nVERIFICATION SUCCESSFUL');

    } catch (err) {
        console.error('\nVERIFICATION FAILED', err);
        process.exit(1);
    } finally {
        await repo.close();
    }
}

verify();
