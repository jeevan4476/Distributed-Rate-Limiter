local bucketKey = KEYS[1]
local idKey = KEYS[2]
local capacity = tonumber(ARGV[1])
local refillRate = tonumber(ARGV[2])
local now = tonumber(ARGV[3])
local requested = tonumber(ARGV[4])

-- Checking idempotency: Fast HMGET lookup (no redundant EXISTS call)
local cached = redis.call("HMGET", idKey, "status", "tokens_remaining", "wait_time_ms")
if cached[1] and cached[1] ~= false then
    return { cached[1], cached[2], cached[3] }
end

-- Fast positional load of bucket parameters (no HGETALL table loop)
local raw = redis.call("HMGET", bucketKey, "tokens", "last_refill_at")
local tokens, lastRefill

if not raw[1] or raw[1] == false then
    tokens = capacity
    lastRefill = now
else
    tokens = tonumber(raw[1])
    lastRefill = tonumber(raw[2])
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

-- Save bucket state
redis.call("HSET", bucketKey,
    "tokens", tostring(tokens),
    "last_refill_at", tostring(now) -- FIXED: Advance timestamp to current 'now'
)
redis.call("PEXPIRE", bucketKey, 60000)

-- Save idempotency record
redis.call("HSET", idKey,
    "status", status,
    "tokens_remaining", tostring(tokens),
    "wait_time_ms", tostring(waitTime)
)
redis.call("PEXPIRE", idKey, 60000)

-- Return positional array: [status, tokens_remaining, wait_time_ms]
return { status, tostring(tokens), tostring(waitTime) }