import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';  

const pkg = grpc.loadPackageDefinition(
    protoLoader.loadSync(
        path.resolve(__dirname, '../proto/ratelimit.proto'),
        { keepCase: false, longs: String, enums: String, defaults: true, oneofs: true }
    )
) as any;

const client = new pkg.ratelimit.v1.RateLimiter(
    'localhost:50051',
    grpc.credentials.createInsecure()
);

async function acquire(logicalKey: string, cost: number) {
    return new Promise<any>((res, rej) =>
        client.Acquire(
            { requestId: uuidv4(), logicalKey, cost },  
            (err: any, r: any) => err ? rej(err) : res(r)
        )
    );
}

async function main() {
    console.log('--- Basic Usage Demo ---\n');
    const result = await acquire('user:123', 3);
    if (result.verdict === 'ALLOWED') {
        console.log(`ALLOWED — ${result.remaining} tokens remaining`);
    } else {
        console.log(`DENIED — retry after ${result.retryAfter?.seconds}s`);
    }
}

main().catch(console.error);