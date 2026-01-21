export enum AcquireResultStatus {
    ALLOWED = 'ALLOWED',
    DENIED = 'DENIED',
}

export interface AcquireResult {
    status: AcquireResultStatus;
    tokensRemaining: number;
    waitTimeMs: number;
}

export class RateLimitError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'RateLimitError';
    }
}

export class SerializationError extends RateLimitError {
    constructor(message: string = 'Serialization failure (40001)') {
        super(message);
        this.name = 'SerializationError';
    }
}

export class DeadlockError extends RateLimitError {
    constructor(message: string = 'Deadlock detected (40P01)') {
        super(message);
        this.name = 'DeadlockError';
    }
}

export class FatalError extends RateLimitError {
    constructor(message: string, public cause?: unknown) {
        super(message);
        this.name = 'FatalError';
    }
}

export interface RateLimitRepository {
    /**
     * Attempts to acquire tokens in a single serializable transaction.
     * @throws SerializationError if transaction fails due to concurrency
     * @throws FatalError for connection issues
     */
    acquire(
        ctx: { requestId: string; deadlineMs?: number },
        logicalKey: string,
        cost: number,
        defaultCapacity: number,
        defaultRefillRate: number
    ): Promise<AcquireResult>;
}

export interface Logger {
    info(msg: string, meta?: Record<string, any>): void;
    error(msg: string, meta?: Record<string, any>): void;
    warn(msg: string, meta?: Record<string, any>): void;
}
