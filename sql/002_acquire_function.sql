/**
 * 002_acquire_function.sql
 * Atomic Stored Procedure for High-Throughput Token Bucket Rate Limiting.
 * 
 * Collapses 6 client-database network round trips into a single 1-RTT atomic call:
 * 1. Checks Idempotency cache.
 * 2. Locks rate limit bucket row (FOR UPDATE) or creates if absent.
 * 3. Calculates token refill & consumption inside the DB engine.
 * 4. Updates bucket state.
 * 5. Saves idempotency record.
 * 6. Returns (status, tokens_remaining, wait_time_ms).
 */

CREATE OR REPLACE FUNCTION fn_acquire_rate_limit_token(
    p_request_id UUID,
    p_key TEXT,
    p_cost DOUBLE PRECISION,
    p_default_capacity DOUBLE PRECISION,
    p_default_refill_rate DOUBLE PRECISION,
    p_now TIMESTAMP WITH TIME ZONE DEFAULT NOW()
)
RETURNS TABLE (
    result_status TEXT,
    tokens_remaining DOUBLE PRECISION,
    wait_time_ms BIGINT
) 
LANGUAGE plpgsql
AS $$
DECLARE
    v_cached RECORD;
    v_bucket RECORD;
    v_now_ms DOUBLE PRECISION;
    v_last_refill_ms DOUBLE PRECISION;
    v_delta_ms DOUBLE PRECISION;
    v_tokens DOUBLE PRECISION;
    v_refill DOUBLE PRECISION;
    v_status TEXT;
    v_wait_time_ms BIGINT := 0;
BEGIN
    -- 1. Check Idempotency Cache
    SELECT ik.result_status, ik.tokens_remaining, ik.wait_time_ms
    INTO v_cached
    FROM idempotency_keys ik
    WHERE ik.request_id = p_request_id;

    IF FOUND THEN
        RETURN QUERY SELECT v_cached.result_status, v_cached.tokens_remaining, v_cached.wait_time_ms;
        RETURN;
    END IF;

    -- 2. Lock and Fetch or Insert Bucket (Row-level FOR UPDATE)
    SELECT rlb.tokens, rlb.last_refill_at, rlb.capacity, rlb.refill_rate
    INTO v_bucket
    FROM rate_limit_buckets rlb
    WHERE rlb.key = p_key
    FOR UPDATE;

    IF NOT FOUND THEN
        INSERT INTO rate_limit_buckets (key, tokens, last_refill_at, capacity, refill_rate)
        VALUES (p_key, p_default_capacity, p_now, p_default_capacity, p_default_refill_rate)
        ON CONFLICT (key) DO UPDATE SET updated_at = NOW()
        RETURNING rate_limit_buckets.tokens, rate_limit_buckets.last_refill_at, rate_limit_buckets.capacity, rate_limit_buckets.refill_rate
        INTO v_bucket;
    END IF;

    -- 3. Calculate Token Consumption & Refill in Database Engine (Zero App Round-trips!)
    v_now_ms := EXTRACT(EPOCH FROM p_now) * 1000.0;
    v_last_refill_ms := EXTRACT(EPOCH FROM v_bucket.last_refill_at) * 1000.0;
    v_delta_ms := GREATEST(0.0, v_now_ms - v_last_refill_ms);
    v_refill := (v_delta_ms / 1000.0) * v_bucket.refill_rate;
    v_tokens := LEAST(v_bucket.capacity, v_bucket.tokens + v_refill);

    -- 4. Evaluate Verdict
    IF v_tokens >= p_cost THEN
        v_tokens := v_tokens - p_cost;
        v_status := 'ALLOWED';
        v_wait_time_ms := 0;
    ELSE
        v_status := 'DENIED';
        v_wait_time_ms := CEIL(((p_cost - v_tokens) / v_bucket.refill_rate) * 1000.0)::BIGINT;
    END IF;

    -- 5. Update Bucket State
    UPDATE rate_limit_buckets
    SET tokens = v_tokens,
        last_refill_at = p_now,
        updated_at = p_now
    WHERE key = p_key;

    -- 6. Store Idempotency Key
    INSERT INTO idempotency_keys (request_id, bucket_key, result_status, tokens_remaining, wait_time_ms)
    VALUES (p_request_id, p_key, v_status, v_tokens, v_wait_time_ms);

    -- 7. Return Result
    RETURN QUERY SELECT v_status, v_tokens, v_wait_time_ms;
END;
$$;
