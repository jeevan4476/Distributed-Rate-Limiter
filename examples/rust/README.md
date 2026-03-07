# Payment Processor

A rate-limited payment processing service built with [Axum](https://github.com/tokio-rs/axum) and [Tonic](https://github.com/hyperium/tonic) gRPC client for the distributed rate limiter.

## Use Case

Payment processing API that enforces **3 requests per minute per user** to prevent abuse and duplicate transactions.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/health` | Health check (includes rate limiter status) |
| `POST` | `/process-payment` | Rate-limited payment endpoint |

## Local Development

### Prerequisites

- [Rust](https://rustup.rs/)
- [protoc](https://grpc.io/docs/protoc-installation/) (Protocol Buffers compiler)
- Rate limiter server running on `localhost:50051`

### Build & Run

```sh
cd examples/rust
cargo build --release
cargo run --release
```

### Test

```sh
# Health check
curl http://localhost:8000/health

# Process payment (first requests allowed)
curl -X POST http://localhost:8000/process-payment \
  -H "Content-Type: application/json" \
  -d '{"user_id": "user123", "amount": 99.99, "currency": "USD"}'

# After exhausting rate limit (3 req/min)
curl -X POST http://localhost:8000/process-payment \
  -H "Content-Type: application/json" \
  -d '{"user_id": "user123", "amount": 50.00, "currency": "USD"}'
# Returns 429
```

## Docker

Build from repository root:

```sh
docker build -f examples/rust/Dockerfile -t payment-processor .
```

Run with rate limiter:

```sh
docker run -p 8000:8000 \
  -e RATE_LIMITER_ADDR=http://host.docker.internal:50051 \
  payment-processor
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `RATE_LIMITER_ADDR` | `http://localhost:50051` | gRPC address of the rate limiter |
| `BIND_ADDR` | `0.0.0.0:8000` | Address to bind the HTTP server |

## Request/Response Examples

### Process Payment Request

```json
{
  "user_id": "user123",
  "amount": 99.99,
  "currency": "USD"
}
```

### Successful Payment (200)

```json
{
  "transaction_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "processed",
  "remaining_requests": 2
}
```

### Rate Limited (429)

```json
{
  "error": "Rate limit exceeded",
  "retry_after": 45
}
```

### Rate Limiter Unavailable (503)

```json
{
  "error": "Rate limiter unavailable: transport error"
}
```

## Architecture

```
 _________________    gRPC          __________________
│  HTTP Client    │──────────────▶│  Payment         │
│                 │                │  Processor       │
|_________________|                │  (Axum)          │
                                   |__________________|
                                            │ gRPC
                                            ▼
                                   __________________
                                  │  Rate Limiter    │
                                  │  (gRPC Server)   │
                                  |__________________|
```
