# ADR 001: PostgreSQL Datastore Role and Contention Tradeoffs

## Status
Accepted

## Context
In v1.0 of this service, the PostgreSQL repository executed client-orchestrated transactions using `SERIALIZABLE` isolation across 6 sequential TCP round-trips (`BEGIN` -> `SELECT idempotency` -> `SELECT FOR UPDATE` -> `UPDATE bucket` -> `INSERT idempotency` -> `COMMIT`). Under concurrent load, PostgreSQL's Serializable Snapshot Isolation (SSI) engine aborted conflicting transactions with SQLSTATE `40001`, which were caught in TypeScript and retried with exponential backoff and jitter.

In v1.1, we introduced `fn_acquire_rate_limit_token`, an atomic PL/pgSQL stored procedure that collapsed all 6 round-trips into a single network query. While this reduced network floor latency, benchmark measurements revealed an unexpected divergence:
* **Low Contention (unique keys):** ~2,047 RPS
* **High Contention (single hot key):** Throughput collapsed from ~1,256 RPS down to **223 RPS**, with P99 latency spiking to **891ms**.

### Root Cause Analysis of the Contention Inversion
1. **Lock Convoy on Physical Tuples:** Under the 1-RTT stored procedure, concurrent transactions queue sequentially on the exact same row lock (`SELECT ... FOR UPDATE`). Instead of aborting and spreading attempts over time via jitter, 10–20 workers form a sequential queue on a single physical tuple in PostgreSQL shared buffers.
2. **WAL Buffer Sync Bottleneck:** Each queued transaction must wait for the preceding transaction's Write-Ahead Log (WAL) record commit before acquiring the lock and proceeding.
3. **Foreign Key Overhead:** Every rate limit check inserts into `idempotency_keys`, enforcing a foreign key constraint back to `rate_limit_buckets(key)`, compounding catalog and index lock contention.

Meanwhile, the Redis backend with zero-allocation positional Lua parsing sustained **15,955 RPS** under identical hot-key contention (P50 latency of 0.52ms).

## Decision
1. **Demote PostgreSQL to the Durable / Low-Volume Tier:**
   PostgreSQL is explicitly designated as the durable store for non-critical, low-RPS, or strict audit workloads (e.g., enterprise daily quotas, administrative reporting, and durable billing limits).
2. **Designate Redis as the High-Throughput Coordination Tier:**
   High-concurrency API traffic must use Redis.
3. **Transparent Documentation:**
   The README and benchmark documentation will report the 223 RPS hot-key reality transparently. We will not claim that relational ACID databases with row locking are suitable for high-throughput sub-millisecond hot-key rate limiting.
4. **Roadmap to 100k RPS:**
   Neither Redis nor PostgreSQL can reach 100k RPS with a network round-trip on every request. The path to 100k RPS will utilize local in-memory token leasing (edge-local token buckets) with asynchronous batch reconciliation against Redis.

## Consequences
* The codebase maintains dual backends, but their operational roles are distinct: Redis for high-frequency traffic; PostgreSQL for durability and auditability.
* Architectural documentation is honest and defensible under technical review.
