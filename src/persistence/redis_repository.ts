import Redis from "ioredis";
import path from "path";
import { readFileSync } from "fs";
import {
    AcquireResult,
    FatalError,
    RateLimitRepository,
    AcquireResultStatus,
    AdminRepository,
    BucketStats
} from "../domain/types";

export class RedisRateLimitRepository implements RateLimitRepository, AdminRepository {
    private redis: Redis;

    constructor(connectionString: string) {
        this.redis = new Redis(connectionString);
        const luaScript = readFileSync(path.join(__dirname, "scripts/acquireToken.lua"), "utf8");

        this.redis.defineCommand("acquireToken", {
            numberOfKeys: 2,
            lua: luaScript
        });
    }

    async acquire(
        ctx: { requestId: string; deadlineMs?: number },
        logicalKey: string,
        cost: number,
        defaultCapacity: number,
        defaultRefillRate: number
    ): Promise<AcquireResult> {
        const bucketKey = `bucket:${logicalKey}`;
        const idKey = `idempotency:${ctx.requestId}`;

        try {
            const raw = await (this.redis as any).acquireToken(
                bucketKey,
                idKey,
                defaultCapacity,
                defaultRefillRate,
                Date.now(),
                cost
            );
            // Positional array indexing: [0] = status, [1] = tokens_remaining, [2] = wait_time_ms
            return {
                status: raw[0] as AcquireResultStatus,
                tokensRemaining: parseFloat(raw[1]),
                waitTimeMs: parseInt(raw[2], 10)
            };
        } catch (err) {
            throw new FatalError("Redis acquire failed", err);
        }
    }

    async ping(): Promise<boolean> {
        try {
            const res = await this.redis.ping();
            return res === "PONG";
        } catch {
            return false;
        }
    }

    async resetBucket(key: string): Promise<number> {
        const bucketKey = `bucket:${key}`;
        const raw = await this.redis.hmget(bucketKey, "capacity");
        if (!raw[0]) {
            throw new Error(`Bucket not found: ${key}`);
        }
        const capacity = parseFloat(raw[0]);
        await this.redis.hset(bucketKey, "tokens", tostring(capacity), "last_refill_at", tostring(Date.now()));
        return capacity;
    }

    async getBucketStats(key: string): Promise<BucketStats> {
        const bucketKey = `bucket:${key}`;
        const raw = await this.redis.hmget(bucketKey, "tokens", "capacity", "refill_rate");
        if (!raw[0]) {
            throw new Error(`Bucket not found: ${key}`);
        }
        const tokens = parseFloat(raw[0]);
        const capacity = parseFloat(raw[1] || "0");
        const refillRate = parseFloat(raw[2] || "0");
        return {
            key,
            tokens,
            capacity,
            refillRate,
            fillPercent: capacity > 0 ? (tokens / capacity) * 100 : 0
        };
    }

    async listBuckets(): Promise<BucketStats[]> {
        const keys = await this.redis.keys("bucket:*");
        const results: BucketStats[] = [];
        for (const fullKey of keys) {
            const logicalKey = fullKey.replace(/^bucket:/, "");
            try {
                const stats = await this.getBucketStats(logicalKey);
                results.push(stats);
            } catch {
                // Ignore keys deleted during iteration
            }
        }
        return results;
    }

    async close(): Promise<void> {
        await this.redis.quit();
    }
}

function tostring(val: number): string {
    return String(val);
}