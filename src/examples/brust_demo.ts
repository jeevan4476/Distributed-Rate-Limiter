import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

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
            { requestId: crypto.randomUUID(), logicalKey, cost },
            (err: any, r: any) => {
                if (err) {
                    console.log(`Request ${String(index).padStart(2)}: ❌ ERROR — ${err.message}`);
                } else if (r.verdict === 'ALLOWED') {
                    console.log(`Request ${String(index).padStart(2)}: ✅ ALLOWED — ${Number(r.remaining).toFixed(1)} tokens left`);
                } else {
                    console.log(`Request ${String(index).padStart(2)}: 🚫 DENIED  — retry after ${r.retryAfter?.seconds ?? 0}s`);
                }
                res();
            }
        )
    );
}

async function main() {
    console.log('--- Burst Demo ---');
    console.log('Sending 15 requests to same bucket (capacity: 10, cost: 1 each)\n');

    const requests = Array.from({ length: 15 }, (_, i) =>
        acquire('demo:burst', 1, i + 1)
    );

    await Promise.all(requests);
    console.log('\nFirst 10 allowed, last 5 denied — bucket exhausted.');
}

main().catch(console.error);