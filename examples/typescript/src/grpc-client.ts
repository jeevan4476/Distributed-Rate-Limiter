import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { randomUUID } from 'crypto';


const PROTO_PATH = path.resolve(process.cwd(), 'proto/ratelimit.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH,{
    keepCase: false,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const proto = grpc.loadPackageDefinition(packageDefinition) as any;

interface AcquireResponse{
    verdict: 'ALLOWED' | 'DENIED' | 'VERDICT_UNSPECIFIED';
    remaining: number;
    retryAfter?: {seconds: string; nanos: number};
}

export class RateLimiterClient{
    private client: any;

    constructor(address: string = process.env.RATE_LIMITER_ADDR || 'localhost:50051'){
        this.client = new proto.ratelimit.v1.RateLimiter(
            address,
            grpc.credentials.createInsecure()
        );
    }

    acquire(logicalKey: string, cost: number = 1): Promise<AcquireResponse>{
        return new Promise((resolve,reject)=>{
            this.client.Acquire(
                {requestId: randomUUID(),logicalKey,cost},
                (err: Error | null, response: AcquireResponse) => {
                    if (err) reject(err);
                    else resolve(response);
                }
            )
        })
    }

    healthCheck(): Promise<{status: string, backend: string}>{
        return new Promise((resolve,reject)=>{
            this.client.HealthCheck({},(err: Error | null, res:any)=>{
                if(err) reject(err);
                else resolve(res);
            })
        })
    }
}

export const rateLimiter = new RateLimiterClient();