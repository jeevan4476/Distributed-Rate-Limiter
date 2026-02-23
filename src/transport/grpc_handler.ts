import * as grpc from '@grpc/grpc-js';
import { AcquireService } from '../service/acquire_service';
import { AcquireRequest, AcquireResponse, AcquireResponse_Verdict , HealthCheckRequest,HealthCheckResponse} from '../proto/ratelimit';


import { FatalError } from '../domain/types';

export class RateLimitGrpcHandler {
    constructor(private service: AcquireService) { }
    private readonly startTime = Date.now();
    
    acquire: grpc.handleUnaryCall<AcquireRequest, AcquireResponse> = async (call, callback) => {
        const req = call.request;

        // 1. Validation
        if (!req.requestId || req.requestId.length === 0) {
            return callback({
                code: grpc.status.INVALID_ARGUMENT,
                details: 'request_id is required',
            });
        }
        if (req.cost <= 0) {
            return callback({
                code: grpc.status.INVALID_ARGUMENT,
                details: 'cost must be positive',
            });
        }
        if (!req.logicalKey) {
            return callback({
                code: grpc.status.INVALID_ARGUMENT,
                details: 'logical_key is required',
            });
        }

        // 2. Call Domain Service
        try {
            const result = await this.service.acquire(
                { requestId: req.requestId },
                req.logicalKey,
                req.cost
            );

            // 3. Map Response
            const response: AcquireResponse = {
                verdict: result.status === 'ALLOWED'
                    ? AcquireResponse_Verdict.ALLOWED
                    : AcquireResponse_Verdict.DENIED,
                remaining: result.tokensRemaining,
                retryAfter: result.waitTimeMs > 0
                    ? { seconds: Math.floor(result.waitTimeMs / 1000), nanos: (result.waitTimeMs % 1000) * 1e6 }
                    : undefined,
                metadata: {}
            };

            callback(null, response);

        } catch (err) {
            if (err instanceof FatalError) {
                return callback({
                    code: grpc.status.ABORTED,
                    details: err.message,
                });
            }
            // Unknown
            console.error(err);
            return callback({
                code: grpc.status.INTERNAL,
                details: 'Internal server error',
            });
        }
    };
    healthCheck: grpc.handleUnaryCall<HealthCheckRequest,HealthCheckResponse> = (_call,callback) => {
        const response: HealthCheckResponse = {
            status: 'healthy',
            uptime: Math.floor((Date.now()-this.startTime)/1000),
            backend: process.env.BACKEND || 'postgres'
        }
        callback(null,response);
    };
}
