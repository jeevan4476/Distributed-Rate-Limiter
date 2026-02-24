#!/bin/bash
set -e

echo "  Distributed Rate Limiter "
echo ""

echo "1. Starting services (postgres backend)..."
bun run dev
sleep 4

echo ""
echo "2. Single request..."
bun run examples/basic_usage.ts

echo ""
echo "3. Burst — 15 requests, capacity 10..."
bun run examples/burst_demo.ts

echo ""
echo "4. Checking bucket stats after burst..."
grpcurl -plaintext \
    -proto src/proto/ratelimit.proto \
    -d '{"key":"demo:burst"}' \
    localhost:50051 ratelimit.v1.Admin/GetBucketStats

echo ""
echo "5. Resetting bucket..."
grpcurl -plaintext \
    -proto src/proto/ratelimit.proto \
    -d '{"key":"demo:burst"}' \
    localhost:50051 ratelimit.v1.Admin/ResetBucket

echo ""
echo "Demo complete."
echo "Run 'bun run dev:down' to stop services."