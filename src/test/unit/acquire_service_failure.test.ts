import { describe, expect, test } from "bun:test";
import { AcquireService, RateLimitConfig } from "../../service/acquire_service";
import {
    Logger,
    AcquireResult,
    AcquireResultStatus,
    SerializationError,
    DeadlockError,
    FatalError,
    RateLimitRepository
} from "../../domain/types";

class MockLogger implements Logger {
    info() { }
    error() { }
    warn() { }
}

class MockFaultRepository implements RateLimitRepository {
    errorToThrow: Error | null = null;
    errorCount = 0;
    attemptsSeen = 0;

    async acquire(
        ctx: { requestId: string; deadlineMs?: number },
        logicalKey: string,
        cost: number,
        defaultCapacity: number,
        defaultRefillRate: number
    ): Promise<AcquireResult> {
        this.attemptsSeen++;
        if (this.errorToThrow && this.errorCount > 0) {
            this.errorCount--;
            throw this.errorToThrow;
        }
        return {
            status: AcquireResultStatus.ALLOWED,
            tokensRemaining: defaultCapacity - cost,
            waitTimeMs: 0
        };
    }

    async ping(): Promise<boolean> {
        return true;
    }

    async close(): Promise<void> { }
}

describe("AcquireService Failure & Retry Semantics", () => {
    const logger = new MockLogger();
    const config: RateLimitConfig = {
        maxRetries: 3,
        baseBackoffMs: 5,
        maxBackoffMs: 20,
        defaultCapacity: 10,
        defaultRefillRate: 1
    };

    test("Retries transient SerializationError and succeeds", async () => {
        const repo = new MockFaultRepository();
        repo.errorToThrow = new SerializationError("Serialization conflict");
        repo.errorCount = 2; // Fail twice, then succeed on 3rd attempt

        const service = new AcquireService(repo, logger, config);
        const result = await service.acquire({ requestId: "req-1" }, "key-1", 1);

        expect(result.status).toBe(AcquireResultStatus.ALLOWED);
        expect(repo.attemptsSeen).toBe(3);
    });

    test("Retries transient DeadlockError and succeeds", async () => {
        const repo = new MockFaultRepository();
        repo.errorToThrow = new DeadlockError("Deadlock detected");
        repo.errorCount = 2;

        const service = new AcquireService(repo, logger, config);
        const result = await service.acquire({ requestId: "req-2" }, "key-1", 1);

        expect(result.status).toBe(AcquireResultStatus.ALLOWED);
        expect(repo.attemptsSeen).toBe(3);
    });

    test("Exceeding maxRetries on SerializationError throws FatalError", async () => {
        const repo = new MockFaultRepository();
        repo.errorToThrow = new SerializationError("Persistent conflict");
        repo.errorCount = 10; // Exceeds config.maxRetries = 3

        const service = new AcquireService(repo, logger, config);
        expect(service.acquire({ requestId: "req-3" }, "key-1", 1)).rejects.toThrow(FatalError);
    });

    test("Non-retryable unexpected errors fail fast with FatalError", async () => {
        const repo = new MockFaultRepository();
        repo.errorToThrow = new Error("Database socket timeout");
        repo.errorCount = 1;

        const service = new AcquireService(repo, logger, config);
        expect(service.acquire({ requestId: "req-4" }, "key-1", 1)).rejects.toThrow(FatalError);
        expect(repo.attemptsSeen).toBe(1); // No retries attempted
    });
});
