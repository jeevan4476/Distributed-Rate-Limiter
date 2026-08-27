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

export interface BucketStats {
    key: string;
    tokens: number;
    capacity: number;
    refillRate: number;
    fillPercent: number;
}

export interface AdminRepository {
    resetBucket(key: string): Promise<number>;
    getBucketStats(key: string): Promise<BucketStats>;
    listBuckets(): Promise<BucketStats[]>;
}

export interface RateLimitRepository {
    /**
     * Attempts to acquire tokens in an atomic transaction or script.
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

    /**
     * Probes the underlying store connectivity.
     */
    ping(): Promise<boolean>;

    /**
     * Gracefully closes pool or socket connections.
     */
    close(): Promise<void>;
}

export interface Logger {
    info(msg: string, meta?: Record<string, any>): void;
    error(msg: string, meta?: Record<string, any>): void;
    warn(msg: string, meta?: Record<string, any>): void;
}
