//similar interface in regards of the postgresSql repository
//redis lua scripts to mimic postgresSQL transactions for atomicity and isolation properties.

import Redis from "ioredis";
import path from "path";
import { readFileSync } from "fs";
import { AcquireResult, FatalError, RateLimitRepository,AcquireResultStatus} from "../domain/types";


export class RedisRateLimitRepository implements RateLimitRepository{
    private redis: Redis;

    constructor(connectionString: string){
        this.redis = new Redis(connectionString);
        const luaScript = readFileSync(path.join(__dirname, "scripts/acquireToken.lua"),"utf8");

        this.redis.defineCommand(
            "acquireToken",{
                numberOfKeys:2,
                lua:luaScript
            }
        )
    }

    async acquire(ctx: { requestId: string}, logicalKey: string, cost: number, defaultCapacity: number, defaultRefillRate: number): Promise<AcquireResult> {
        const bucketKey = `bucket:${logicalKey}`;
        const idKey = `idempotency:${ctx.requestId}`;

        try{
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
        }catch(err){
            throw new FatalError("Redis acquire failed",err);
        }
    }

    async close(){
        await this.redis.quit();
    }
}