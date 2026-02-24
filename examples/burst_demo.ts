import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';  

const pkg = grpc.loadPackageDefinition(
    protoLoader.loadSync(
        path.resolve(__dirname, '../src/proto/ratelimit.proto'),  
        { keepCase: false, longs: String, enums: String, defaults: true, oneofs: true }
    )
) as any;

const client = new pkg.ratelimit.v1.RateLimiter(
    'localhost:50051',
    grpc.credentials.createInsecure()
);

async function acquire(logicalKey: string, cost: number, index: number) {
    return new Promise<void>((res) =>
        client.Acquire(
            { requestId: uuidv4(), logicalKey, cost },  
            (err: any, r: any) => {
                if (err) {
                    console.log(`Request ${String(index).padStart(2)}:  ERROR — ${err.message}`);
                } else if (r.verdict === 'ALLOWED') {
                    console.log(`Request ${String(index).padStart(2)}:  ALLOWED — ${Number(r.remaining).toFixed(1)} tokens left`);
                } else {
                    console.log(`Request ${String(index).padStart(2)}:  DENIED  — retry after ${r.retryAfter?.seconds ?? 0}s`);
                }
                res();
            }
        )
    );
}

async function main() {
    console.log('--- Burst Demo ---');
    console.log('Sending 15 requests to same bucket (capacity: 10, cost: 1 each)\n');

     for (let wave = 0; wave < 5; wave++) {
        const batch = [0, 1, 2].map(j => {
            const index = wave * 3 + j + 1;
            return acquire('demo:burst', 1, index);
        });
        await Promise.all(batch);
    }

    console.log('\nFirst 10 allowed, last 5 denied — bucket exhausted.');
}

main().catch(console.error);