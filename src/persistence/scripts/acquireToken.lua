local bucketKey = KEYS[1]
local idKey = KEYS[2]
local capacity = tonumber(ARGV[1])
local refillRate = tonumber(ARGV[2])
local now = tonumber(ARGV[3])
local requested = tonumber(ARGV[4])

-- checking idempotency
if redis.call("EXISTS", idKey) == 1 then
    return redis.call("HGETALL",idKey)
end

-- loading buket 
local raw = redis.call("HGETALL",bucketKey)

if #raw ==0 then
    tokens = capacity
    lastRefill =now
else
    local data = {}
    for i = 1, #raw , 2 do
        data[raw[i]] = raw[i+1]
    end
    tokens = tonumber(data["tokens"])
    lastRefill = tonumber(data["last_refill_at"])
end

--refill tokens 
local delta = math.max(0,now-lastRefill)
local refill = (delta/1000) * refillRate
tokens = math.min(capacity,tokens + refill)
lastRefill = now

local status 
local waitTime = 0

-- try to acqurie
if tokens >= requested then 
    tokens = tokens - requested
    status = "ALLOWED"
else 
    status = "DENIED"
    waitTime = math.ceil(((requested - tokens) / refillRate) * 1000)
end

-- save bucket
redis.call("HMSET", bucketKey,
    "tokens", tokens,
    "last_refill_at", lastRefill,
    "capacity", capacity,
    "refill_rate", refillRate
)

--ttl
redis.call("PEXPIRE", bucketKey, 60000)

-- save results
redis.call("HMSET", idKey,
    "status", status,
    "tokens_remaining", tokens,
    "wait_time_ms", waitTime
)

redis.call("PEXPIRE", idKey, 60000)

return {
    "status", status,
    "tokens_remaining", tokens,
    "wait_time_ms", waitTime
}