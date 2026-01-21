-- Enable UUID extension if needed (usually standard in modern Postgres, or pgcrypto)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Rate Limit Buckets Table
-- Stores the current state of tokens for a given logical key.
CREATE TABLE IF NOT EXISTS rate_limit_buckets (
    -- logical_key identifies the tenant/user/resource (e.g., "user:123:api_calls").
    key TEXT PRIMARY KEY,

    -- Current available tokens. Precision is needed for sub-token refill.
    tokens DOUBLE PRECISION NOT NULL CHECK (tokens >= 0),

    -- Timestamp of the last refill calculation.
    last_refill_at TIMESTAMP WITH TIME ZONE NOT NULL,

    -- Capacity and Refill Rate are stored here to enforce per-bucket consistency.
    capacity DOUBLE PRECISION NOT NULL,
    refill_rate DOUBLE PRECISION NOT NULL,

    -- Updated At for auditing/locking
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Idempotency Keys Table
-- Ensures exactly-once processing for Acquire requests.
CREATE TABLE IF NOT EXISTS idempotency_keys (
    -- Client-provided Request ID.
    request_id UUID PRIMARY KEY,

    -- The logical bucket key this request operated on.
    bucket_key TEXT NOT NULL REFERENCES rate_limit_buckets(key),

    -- The result of the operation.
    result_status TEXT NOT NULL CHECK (result_status IN ('ALLOWED', 'DENIED')),
    
    -- Snapshot of tokens remaining after this decision.
    tokens_remaining DOUBLE PRECISION NOT NULL,
    
    -- Calculated wait time in ms (0 if ALLOWED).
    wait_time_ms BIGINT NOT NULL,

    -- Timestamp for TTL cleanup
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for future cleanup jobs
CREATE INDEX IF NOT EXISTS idx_idempotency_created_at ON idempotency_keys(created_at);
