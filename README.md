# Centralized Rate Limiter Service

A high-performance rate-limiting service using the **Token Bucket** algorithm, exposed via **gRPC**, with dual-backend support:
- **Redis (High-Throughput Tier):** 1-RTT atomic Lua script with zero-allocation positional array parsing and persistent policy semantics.
- **PostgreSQL (Durable/Audit Tier):** 1-RTT atomic PL/pgSQL stored procedure (`fn_acquire_rate_limit_token`) using row-level locking (`FOR UPDATE`) and relational idempotency auditing.

Engineered with TypeScript and Bun.

---

## Architecture Overview

```text
┌─────────────────┐
│   gRPC Client   │
└────────┬────────┘
         │ (HTTP/2 - Protobuf)
         ▼
┌──────────────────────────────────────────────────────────┐
│ RateLimitGrpcHandler (Input Validation & Error Mapping)   │
└────────┬─────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────┐
│ AcquireService (Retries, Exponential Backoff, Metrics)   │
└────────┬─────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────┐
│ RateLimitRepository Interface                            │
└────────┬────────────────────────────────┬────────────────┘
         │                                │
         ▼                                ▼
┌──────────────────────┐        ┌─────────────────────────┐
│ Redis Repository     │        │ PostgreSQL Repository   │
│ • 1-RTT Lua Script   │        │ • 1-RTT Stored Procedure│
│ • Zero-alloc HMGET   │        │ • Row-level FOR UPDATE  │
│ • Dynamic TTL        │        │ • Relational Audit Log  │
└──────────────────────┘        └─────────────────────────┘
```

### Layer Responsibilities

| Layer | File | Responsibility |
|---|---|---|
| **Transport** | `src/transport/grpc_handler.ts` | Validates UUIDs/key bounds, checks datastore health (`ping`), translates domain errors to gRPC status codes. |
| **Service** | `src/service/acquire_service.ts` | Orchestrates token acquisition, applies exponential backoff on transient concurrency errors (`SerializationError`, `DeadlockError`). |
| **Domain** | `src/domain/token_bucket.ts` | Mathematical reference model for token consumption and clock skew handling. Store engines execute compiled projections (Lua/SQL). |
| **Admin** | `src/service/admin_service.ts` | Administrative operations (bucket resets, utilization inspections) decoupled behind `AdminRepository`. |
| **Persistence** | `src/persistence/` | Engine-specific atomic execution (`redis_repository.ts`, `pg_repository.ts`). |

---

## Measured Performance (v1.1)

Benchmarks executed locally via Bun under identical hardware conditions.

### Scenario 1 — Low Contention (1,000 requests, 20 concurrent workers, unique keys)

| Backend | Throughput | Latency P50 | Latency P95 | Latency P99 |
|---|---|---|---|---|
| PostgreSQL (1-RTT Function) | 2,047 RPS | 8.01 ms | 15.44 ms | 60.19 ms |
| Redis (Positional HMGET Lua) | 16,155 RPS | 0.89 ms | 3.24 ms | 3.96 ms |
| **Performance Delta** | **7.9x faster** | **9.0x faster** | **4.8x faster** | **15.2x faster** |

### Scenario 2 — High Contention (200 requests, 10 concurrent workers, single hot key)

| Backend | Throughput | Latency P50 | Latency P95 | Latency P99 |
|---|---|---|---|---|
| PostgreSQL (Row Lock Convoy) | 223 RPS | 17.02 ms | 88.57 ms | 891.92 ms |
| Redis (Atomic Event Loop) | 15,955 RPS | 0.52 ms | 2.02 ms | 2.07 ms |
| **Performance Delta** | **71.5x faster** | **32.7x faster** | **43.8x faster** | **430.8x faster** |

### Critical Engineering Findings & Tradeoffs

1. **Why PostgreSQL Collapsed Under Hot-Key Contention (223 RPS):**
   In v1.0, PostgreSQL used multi-RTT `SERIALIZABLE` isolation where conflicting transactions aborted immediately with SQLSTATE `40001` and backed off with jitter (~1,256 RPS). In v1.1, the 1-RTT stored procedure uses `SELECT ... FOR UPDATE`, forcing concurrent workers to queue sequentially on the exact same row lock. This creates a **lock convoy** in PostgreSQL shared buffers: all transactions serialize on physical row locks and WAL buffer synchronization, pushing P99 latency to 891ms. See [ADR 001](docs/adr/001-pg-role-and-contention-tradeoffs.md).
2. **Why Redis Sustains ~16k RPS Under Contention:**
   Redis operates on a single-threaded event loop. By replacing `HGETALL` and dictionary allocations with positional `HMGET` array access, each Lua invocation completes in microseconds with zero memory allocations inside the Lua VM.
3. **Datastore Role Alignment:**
   - **Redis:** High-throughput coordination plane for high-frequency API rate limiting.
   - **PostgreSQL:** Durable audit plane for strict billing compliance, enterprise quotas, and administrative visibility.

---

## Architectural Semantics & Fixes

### 1. Redis Policy Persistence & Dynamic TTL
Previous iterations suffered from policy drift: capacity and refill rates were supplied as invocation arguments on every request, meaning changing environment variables mutated live buckets, and an idle bucket was purged after a static 60s TTL (resetting burst allowances).
* **Fix:** The Lua script persists `capacity` and `refill_rate` into the Redis Hash upon creation.
* **Dynamic TTL:** Keys expire only after at least 2x the duration needed to refill from empty to full:
  $$\text{TTL}_{\text{ms}} = \max\left(60000, \frac{\text{capacity}}{\text{refill\_rate}} \times 2000\right)$$
* **Idempotency Window:** Idempotency records are held for a dedicated 5-minute window (`300,000ms`).

### 2. Typed Domain Error Boundary
`AcquireService` does not leak SQLSTATE codes or storage driver types. The repositories map lower-level exceptions into typed domain classes:
* `SerializationError` (SQLSTATE `40001`) -> Retried with truncated exponential backoff + jitter.
* `DeadlockError` (SQLSTATE `40P01`) -> Retried.
* `FatalError` -> Halts retries immediately.

### 3. Active Datastore Health Checks
The gRPC `HealthCheck` endpoint executes a live round-trip probe (`PING` on Redis, `SELECT 1` on PostgreSQL) rather than returning a static response. If the datastore disconnects, `HealthCheck` returns `UNAVAILABLE`.

---

## System Classification & The Path to 100k RPS

### Current Classification: Centralized Multi-Process Service
The system currently deploys as a multi-process service sharing a centralized datastore. It is not yet a multi-sharded distributed system with consistent hashing or partition tolerance.

### Physical Ceiling of the Current Architecture
A single-threaded Redis instance handling 1 network RTT and 1 idempotency write per acquire hits a physical ceiling at 16k–25k RPS. Reaching 100k+ RPS cannot be achieved by micro-optimizing Lua scripts.

### Target Architecture: Edge-Local Token Leases (The 100k Roadmap)
To scale beyond 100,000 RPS:
1. **Local Quota Leases:** Each app worker process leases a batch of tokens (e.g., 50–100) from Redis in one atomic operation.
2. **In-Memory Decisions:** Subsequent client requests are evaluated against local CPU memory (<50 nanoseconds, zero network I/O).
3. **Asynchronous Batch Reconciliation:** Depleted tokens are reconciled asynchronously via batched increments or background gossip sync.
4. **Tradeoff:** Rate limiting transitions from strict global synchrony to approximate global accuracy within a small sync interval window.

---

## Quick Start

### Prerequisites
- Docker and Docker Compose
- Bun runtime (`curl -fsSL https://bun.sh/install | bash`)

### Start Infrastructure

```bash
# Start PostgreSQL and Redis containers
docker compose up -d postgres redis
```

### Run Server

```bash
# Start gRPC server backed by Redis (Default port: 50051)
BACKEND=redis REDIS_URL="redis://localhost:6379" bun run src/cmd/server.ts

# Start gRPC server backed by PostgreSQL
BACKEND=postgres DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ratelimiter" bun run src/cmd/server.ts
```

### Run Tests and Benchmarks

```bash
# Run unit tests (Reference domain math & failure semantics)
bun test src/test/unit

# Run integration tests (Live PostgreSQL verification)
bun test src/test/integration

# Run performance benchmark suite
BACKEND=redis REDIS_URL="redis://localhost:6379" bun run src/test/perf/benchmark.ts
BACKEND=postgres DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ratelimiter" bun run src/test/perf/benchmark.ts
```

---

## Configuration Reference

| Variable | Default | Description |
|---|---|---|
| `BACKEND` | `postgres` | Datastore engine: `postgres` or `redis` |
| `DATABASE_URL` | — | Connection string (Required when `BACKEND=postgres`) |
| `REDIS_URL` | — | Connection string (Required when `BACKEND=redis`) |
| `DEFAULT_CAPACITY` | `10` | Default burst capacity for uninitialized buckets |
| `DEFAULT_REFILL_RATE` | `1` | Default refill rate in tokens per second |
| `MAX_RETRIES` | `3` | Maximum retry attempts for transient concurrency conflicts |
| `BASE_BACKOFF_MS` | `50` | Base exponential backoff in milliseconds |
| `MAX_BACKOFF_MS` | `500` | Maximum cap for retry backoff delay |
| `BIND_ADDR` | `0.0.0.0:50051` | Address and port for the gRPC server |