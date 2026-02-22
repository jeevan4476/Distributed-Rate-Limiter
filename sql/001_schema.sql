/**
 * Enable UUID extension for generating unique identifiers.
 * Required for UUID data types used in idempotency tracking.
 */
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

/**
 * rate_limit_buckets
 * Stores the current state of tokens for a given logical key (tenant/user/resource).
 * Tracks available tokens, refill rates, and capacity for distributed rate limiting.
 */
CREATE TABLE IF NOT EXISTS rate_limit_buckets (
    key TEXT PRIMARY KEY,
    tokens DOUBLE PRECISION NOT NULL CHECK (tokens >= 0),
    last_refill_at TIMESTAMP WITH TIME ZONE NOT NULL,
    capacity DOUBLE PRECISION NOT NULL,
    refill_rate DOUBLE PRECISION NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

/**
 * idempotency_keys
 * Ensures exactly-once processing for Acquire requests.
 * Caches request results to prevent duplicate token consumption.
 */
CREATE TABLE IF NOT EXISTS idempotency_keys (
    request_id UUID PRIMARY KEY,
    bucket_key TEXT NOT NULL REFERENCES rate_limit_buckets(key),
    result_status TEXT NOT NULL CHECK (result_status IN ('ALLOWED', 'DENIED')),
    tokens_remaining DOUBLE PRECISION NOT NULL,
    wait_time_ms BIGINT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_idempotency_created_at ON idempotency_keys(created_at);
