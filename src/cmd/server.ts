import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import dotenv from 'dotenv';
import { PostgresRateLimitRepository } from '../persistence/pg_repository';
import { RateLimitDomainService } from '../domain/service';
import { RateLimitGrpcHandler } from '../transport/grpc_handler';
import { Logger } from '../domain/types';
import { AcquireService } from '../service/acquire_service';

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
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    });
    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any;
    const rateLimitProto = protoDescriptor.ratelimit.v1;

    // Config
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
        console.error('DATABASE_URL is required');
        process.exit(1);
    }

    const config = {
        maxRetries: parseInt(process.env.MAX_RETRIES || '3', 10),
        baseBackoffMs: parseInt(process.env.BASE_BACKOFF_MS || '50', 10),
        maxBackoffMs: parseInt(process.env.MAX_BACKOFF_MS || '500', 10),
        defaultCapacity: parseInt(process.env.DEFAULT_CAPACITY || '10', 10),
        defaultRefillRate: parseInt(process.env.DEFAULT_REFILL_RATE || '1', 10),
    };

    // Wiring
    const repo = new PostgresRateLimitRepository(dbUrl);
    const service = new AcquireService(repo, consoleLogger, config);
    const handler = new RateLimitGrpcHandler(service);

    const server = new grpc.Server();

    // Note: 'Acquire' matches the rpc name in proto
    server.addService(rateLimitProto.RateLimiter.service, {
        Acquire: handler.acquire,
    });

    const bindAddr = process.env.BIND_ADDR || '0.0.0.0:50051';

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
