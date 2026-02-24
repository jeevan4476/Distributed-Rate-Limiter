import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import dotenv from 'dotenv';
import { PostgresRateLimitRepository } from '../persistence/pg_repository';
import { RateLimitDomainService } from '../domain/service';
import { RateLimitGrpcHandler } from '../transport/grpc_handler';
import { Logger } from '../domain/types';
import { AcquireService } from '../service/acquire_service';
import { RedisRateLimitRepository } from '../persistence/redis_reporistory';
import { AdminService } from '../service/admin_service';
import { AdminGrpcHandler } from '../transport/admin_grpc_handler';

dotenv.config();

// Basic Logger Implementation
const consoleLogger: Logger = {
    info: (msg, meta) => console.log(`INFO: ${msg}`, meta ? JSON.stringify(meta) : ''),
    error: (msg, meta) => console.error(`ERROR: ${msg}`, meta ? JSON.stringify(meta) : ''),
    warn: (msg, meta) => console.warn(`WARN: ${msg}`, meta ? JSON.stringify(meta) : ''),
};

async function main() {
    const PROTO_PATH = path.resolve(__dirname, '../proto/ratelimit.proto');

    // Load Proto
    const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
        keepCase: false,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    });
    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any;
    const rateLimitProto = protoDescriptor.ratelimit.v1;

    const config = {
        maxRetries: parseInt(process.env.MAX_RETRIES || '3', 10),
        baseBackoffMs: parseInt(process.env.BASE_BACKOFF_MS || '50', 10),
        maxBackoffMs: parseInt(process.env.MAX_BACKOFF_MS || '500', 10),
        defaultCapacity: parseInt(process.env.DEFAULT_CAPACITY || '10', 10),
        defaultRefillRate: parseInt(process.env.DEFAULT_REFILL_RATE || '1', 10),
    };

    // Wiring
    const backend = process.env.BACKEND || 'postgres';
    consoleLogger.info(`Starting with backend: ${backend}`);
    let repo: PostgresRateLimitRepository | RedisRateLimitRepository;
   
     if (backend === 'redis') {
        const redisUrl = process.env.REDIS_URL;
        if (!redisUrl) {
            console.error('REDIS_URL is required when BACKEND=redis');
            process.exit(1);
        }
        repo = new RedisRateLimitRepository(redisUrl);

    } else {
        const dbUrl = process.env.DATABASE_URL;
        if (!dbUrl) {
            console.error('DATABASE_URL is required when BACKEND=postgres');
            process.exit(1);
        }
        repo = new PostgresRateLimitRepository(dbUrl);
    }

    const service = new AcquireService(repo as any, consoleLogger, config);
    const handler = new RateLimitGrpcHandler(service);
    
    const adminService = new AdminService(
        backend === 'postgres' ? (repo as any).getPool(): null,
        backend
    );
    const adminHandler = new AdminGrpcHandler(adminService);
    
    const server = new grpc.Server();

    
    server.addService(rateLimitProto.RateLimiter.service, {
        Acquire: handler.acquire,
        HealthCheck: handler.healthCheck
    });

    server.addService(rateLimitProto.Admin.service,{
        ResetBucket: adminHandler.resetBucket,
        GetBucketStats: adminHandler.getBucketStats,
        ListBuckets: adminHandler.listBuckets,
    })

    const port = process.env.PORT || '50051';
    const bindAddr = process.env.BIND_ADDR || `0.0.0.0:${port}`;

    server.bindAsync(bindAddr, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Server listening on ${bindAddr}`);
    });

    // Graceful Shutdown
    process.on('SIGTERM', async () => {
        console.log('Shutting down...');
        server.tryShutdown(async () => {
            await repo.close();
            process.exit(0);
        });
    });
}

main();
