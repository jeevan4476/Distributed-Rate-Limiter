# Search API 

A rate-limited search API service built with [Hono](https://hono.dev/) and gRPC client for the distributed rate limiter.

## Use Case

Search/query API that enforces **30 requests per minute per user**.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/health` | Health check (includes rate limiter status) |
| `GET` | `/search?user_id=<id>&q=<query>` | Rate-limited search endpoint |

## Local Development

### Prerequisites

- [Bun](https://bun.sh/) runtime
- Rate limiter server running on `localhost:50051`

### Install & Run

```sh
cd examples/typescript
bun install
bun run dev
```

### Test

```sh
# Health check
curl http://localhost:3000/health

# Search (first requests allowed)
curl "http://localhost:3000/search?user_id=123&q=hello"

# After exhausting rate limit
curl -i "http://localhost:3000/search?user_id=123&q=hello"
# Returns 429 with Retry-After header
```

## Docker

Build from repository root:

```sh
docker build -f examples/typescript/Dockerfile -t search-api .
```

Run with rate limiter:

```sh
docker run -p 3000:3000 \
  -e RATE_LIMITER_ADDR=host.docker.internal:50051 \
  search-api
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `RATE_LIMITER_ADDR` | `localhost:50051` | gRPC address of the rate limiter |

## Response Examples

### Successful Search (200)

```json
{
  "query": "hello",
  "results": ["Result 1 for \"hello\"", "Result 2 for \"hello\""],
  "remaining": 29
}
```

### Rate Limited (429)

```json
{
  "error": "Rate limit exceeded",
  "retryAfter": 5,
  "remaining": 0
}
```

Headers: `Retry-After: 5`

### Rate Limiter Unavailable (503)

```json
{
  "error": "Rate limiter unavailable"
}
```
