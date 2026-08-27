import * as grpc from '@grpc/grpc-js';
import { AcquireService } from '../service/acquire_service';
import {
    AcquireRequest,
    AcquireResponse,
    AcquireResponse_Verdict,
    HealthCheckRequest,
    HealthCheckResponse
} from '../proto/ratelimit';
import { FatalError, RateLimitRepository } from '../domain/types';

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export class RateLimitGrpcHandler {
    constructor(
        private service: AcquireService,
        private repo?: RateLimitRepository
    ) { }

    private readonly startTime = Date.now();

    acquire: grpc.handleUnaryCall<AcquireRequest, AcquireResponse> = async (call, callback) => {
        const req = call.request;

        // 1. Contract Validation
        if (!req.requestId || !UUID_REGEX.test(req.requestId)) {
            return callback({
                code: grpc.status.INVALID_ARGUMENT,
                details: 'request_id must be a valid UUID',
            });
        }
        if (req.cost <= 0) {
            return callback({
                code: grpc.status.INVALID_ARGUMENT,
                details: 'cost must be a positive integer',
            });
        }
        if (!req.logicalKey || req.logicalKey.trim().length === 0 || req.logicalKey.length > 256) {
            return callback({
                code: grpc.status.INVALID_ARGUMENT,
                details: 'logical_key is required and must not exceed 256 characters',
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
            console.error('Unhandled internal error during acquire:', err);
            return callback({
                code: grpc.status.INTERNAL,
                details: 'Internal server error',
            });
        }
    };

    healthCheck: grpc.handleUnaryCall<HealthCheckRequest, HealthCheckResponse> = async (_call, callback) => {
        let isHealthy = true;
        if (this.repo) {
            try {
                isHealthy = await this.repo.ping();
            } catch {
                isHealthy = false;
            }
        }

        const response: HealthCheckResponse = {
            status: isHealthy ? 'healthy' : 'unhealthy',
            uptime: Math.floor((Date.now() - this.startTime) / 1000),
            backend: process.env.BACKEND || 'postgres'
        };

        if (!isHealthy) {
            return callback({
                code: grpc.status.UNAVAILABLE,
                details: 'Underlying datastore connectivity failure'
            }, response);
        }

        callback(null, response);
    };
}
