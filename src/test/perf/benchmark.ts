
import { Pool } from 'pg';
import { v4 as uuidv4 } from 'uuid';
import { AcquireService } from '../../service/acquire_service';
import { PostgresRateLimitRepository } from '../../persistence/pg_repository';
import { Logger } from '../../domain/types';
import { RedisRateLimitRepository } from '../../persistence/redis_repository';

const logger: Logger = {
    info: () => { }, // Silence info for perf
    error: (msg, meta) => console.error(msg, meta),
    warn: () => { },
};

const BACKEND = process.env.BACKEND || 'postgres';
const CONNECTION_STRING = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/ratelimiter';
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

async function runBenchmark() {
    let repo: PostgresRateLimitRepository | RedisRateLimitRepository;
    let pool : Pool | null = null;
    if(BACKEND == 'redis'){
        repo = new RedisRateLimitRepository(REDIS_URL);
    }else{
        pool = new Pool({connectionString: CONNECTION_STRING,max: 20});
        repo = new PostgresRateLimitRepository(CONNECTION_STRING);
    }
    const service = new AcquireService(repo as any , logger, {
        maxRetries: 3,
        baseBackoffMs: 5,
        maxBackoffMs: 50,
        defaultCapacity: 100,
        defaultRefillRate: 100
    });

    for (let i = 0; i < 100; i++) {
        await service.acquire({ requestId: uuidv4() }, `warmup:${i}`, 1);
    }
    const SCENARIO_1_N = 1000;
    const SCENARIO_1_CONCURRENCY = 20;

    console.log(`\nScenario 1: Low Contention (${SCENARIO_1_N} reqs, ${SCENARIO_1_CONCURRENCY} concurrency)`);
    const latencies1: number[] = [];
    const start1 = performance.now();

    await runConcurrentRequests(SCENARIO_1_N, SCENARIO_1_CONCURRENCY, service, latencies1, () => `key:${uuidv4()}`);

    const duration1 = performance.now() - start1;
    printStats(latencies1, duration1, SCENARIO_1_N);

    // Scenario 2: High Contention (Single Key)
    const SCENARIO_2_N = 200; // Smaller N because retries slow it down
    const SCENARIO_2_CONCURRENCY = 10;

    console.log(`\nScenario 2: High Contention (${SCENARIO_2_N} reqs, ${SCENARIO_2_CONCURRENCY} concurrency)`);
    const latencies2: number[] = [];
    const start2 = performance.now();

    await runConcurrentRequests(SCENARIO_2_N, SCENARIO_2_CONCURRENCY, service, latencies2, () => `hot-key`);

    const duration2 = performance.now() - start2;
    printStats(latencies2, duration2, SCENARIO_2_N);

    await repo.close();
   if (pool) await pool.end();
}

async function runConcurrentRequests(
    totalRequests: number,
    concurrency: number,
    service: AcquireService,
    latencies: number[],
    keyGenerator: () => string
) {
    let completed = 0;

    async function worker() {
        while (completed < totalRequests) {
            completed++;
            const t0 = performance.now();
            try {
                await service.acquire({ requestId: uuidv4() }, keyGenerator(), 1);
            } catch (e) {}
            const t1 = performance.now();
            latencies.push(t1 - t0);
        }
    }

    const workers = [];
    for (let i = 0; i < concurrency; i++) {
        workers.push(worker());
    }
    await Promise.all(workers);
}

function printStats(latencies: number[], durationMs: number, count: number) {
    latencies.sort((a, b) => a - b);
    const p50 = latencies[Math.floor(latencies.length * 0.50)] || 0;
    const p95 = latencies[Math.floor(latencies.length * 0.95)] || 0;
    const p99 = latencies[Math.floor(latencies.length * 0.99)] || 0;
    const rps = (count / (durationMs / 1000)).toFixed(2);

    console.log(`Total Time: ${durationMs.toFixed(2)}ms`);
    console.log(`Throughput: ${rps} RPS`);
    console.log(`Latency P50: ${p50.toFixed(2)}ms`);
    console.log(`Latency P95: ${p95.toFixed(2)}ms`);
    console.log(`Latency P99: ${p99.toFixed(2)}ms`);
}

runBenchmark().catch(console.error);
