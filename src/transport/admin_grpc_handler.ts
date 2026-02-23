import * as grpc from '@grpc/grpc-js';
import { AdminService } from '../service/admin_service';
import { GetBucketStatsRequest, GetBucketStatsResponse, ListBucketsRequest, ListBucketsResponse, ResetBucketRequest, ResetBucketResponse } from '../proto/ratelimit';

export class AdminGrpcHandler{
    constructor(private service: AdminService){}

    resetBucket: grpc.handleUnaryCall<ResetBucketRequest,ResetBucketResponse> = async (call,callback)=>{
        try{
            const tokens = await this.service.resetBucket(call.request.key);
            const result : ResetBucketResponse = {
                tokensAfter:tokens
            };
            callback(null,result);
        }catch(err:any){
            callback({ code: grpc.status.NOT_FOUND, details: err.message });
        }
    }
    getBucketStats: grpc.handleUnaryCall<GetBucketStatsRequest,GetBucketStatsResponse> = async (call,callback)=>{
        try{
            const stats = await this.service.getBucketStats(call.request.key);
            const result : GetBucketStatsResponse = {
                key:stats.key,
                tokens: stats.tokens,
                capacity:stats.capacity,
                fillPercent:stats.fillPercent,
                refillRate:stats.refillRate
            }
            callback(null,result);
        }catch(err:any){
            callback({ code: grpc.status.NOT_FOUND, details: err.message });
        }
    }
    listBuckets: grpc.handleUnaryCall<ListBucketsRequest,ListBucketsResponse> = async (_call,callback)=>{
        try {
            const buckets = await this.service.listBuckets();
            const result : ListBucketsResponse = {
                buckets
            };
            callback(null, result);
        } catch (err: any) {
            callback({ code: grpc.status.INTERNAL, details: err.message });
        }
    }
}