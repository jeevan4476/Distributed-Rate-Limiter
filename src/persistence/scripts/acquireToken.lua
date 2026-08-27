local bucketKey = KEYS[1]
local idKey = KEYS[2]
local defaultCapacity = tonumber(ARGV[1])
local defaultRefillRate = tonumber(ARGV[2])
local now = tonumber(ARGV[3])
local requested = tonumber(ARGV[4])
local idTtlMs = tonumber(ARGV[5]) or 300000 -- 5 minutes default idempotency window

-- Checking idempotency: Fast HMGET lookup (no redundant EXISTS call)
local cached = redis.call("HMGET", idKey, "status", "tokens_remaining", "wait_time_ms")
if cached[1] and cached[1] ~= false then
    return { cached[1], cached[2], cached[3] }
end

-- Fast positional load of bucket parameters (tokens, last_refill_at, capacity, refill_rate)
local raw = redis.call("HMGET", bucketKey, "tokens", "last_refill_at", "capacity", "refill_rate")
local tokens, lastRefill, capacity, refillRate

if not raw[1] or raw[1] == false then
    capacity = defaultCapacity
    refillRate = defaultRefillRate
    tokens = capacity
    lastRefill = now
else
    tokens = tonumber(raw[1])
    lastRefill = tonumber(raw[2])
    -- Persisted policy takes precedence over environment defaults to prevent policy mutation on deploy
    capacity = tonumber(raw[3]) or defaultCapacity
    refillRate = tonumber(raw[4]) or defaultRefillRate
end

-- Refill tokens
local delta = math.max(0, now - lastRefill)
local refill = (delta / 1000) * refillRate
tokens = math.min(capacity, tokens + refill)

local status
local waitTime = 0

-- Try to acquire
if tokens >= requested then 
    tokens = tokens - requested
    status = "ALLOWED"
else 
    status = "DENIED"
    waitTime = math.ceil(((requested - tokens) / refillRate) * 1000)
end

-- Save bucket state with persisted policy
redis.call("HSET", bucketKey,
    "tokens", tostring(tokens),
    "last_refill_at", tostring(now),
    "capacity", tostring(capacity),
    "refill_rate", tostring(refillRate)
)

-- Dynamic TTL: At least 2x the time required to refill from empty to full capacity, floor 60s
local bucketTtlMs = math.max(60000, math.ceil((capacity / refillRate) * 2000))
redis.call("PEXPIRE", bucketKey, bucketTtlMs)

-- Save idempotency record
redis.call("HSET", idKey,
    "status", status,
    "tokens_remaining", tostring(tokens),
    "wait_time_ms", tostring(waitTime)
)
redis.call("PEXPIRE", idKey, idTtlMs)

-- Return positional array: [status, tokens_remaining, wait_time_ms]
return { status, tostring(tokens), tostring(waitTime) }