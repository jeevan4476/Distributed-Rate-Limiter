#  Performance Profiling & FlameGraph Mastery Guide

> **Target Profile:** Systems Engineers, Infrastructure Engineers, and Backend Architects.
> **Scope:** From CPU Silicon PMUs to Kernel Sampling, Stack Unwinding, V8 JIT Symbols, and Differential Flame Graphs.

---

##  Table of Contents
1. [Sampling vs Instrumentation: The Physics of Profiling](#1-sampling-vs-instrumentation)
2. [Hardware Performance Counters & CPU Stalls](#2-hardware-counters--pmus)
3. [Stack Unwinding & Frame Pointers vs DWARF](#3-stack-unwinding)
4. [The JIT Symbol Problem in V8 / Node.js / Bun](#4-the-jit-symbol-problem)
5. [The Flame Graph Pipeline (Brendan Gregg Toolchain)](#5-the-flame-graph-pipeline)
6. [On-CPU vs Off-CPU Profiling (The Systems Engineer's Trap)](#6-on-cpu-vs-off-cpu-profiling)
7. [Memory Allocation & Garbage Collection Profiling](#7-memory-allocation--gc)
8. [Differential (Red/Blue) Flame Graphs: Proving Optimizations](#8-differential-flame-graphs)
9. [Production Step-by-Step Playbook for this Repository](#9-production-playbook)

---

## 1. Sampling vs Instrumentation

| Dimension | Instrumentation (Tracing) | Sampling (Statistical) |
| :--- | :--- | :--- |
| **Mechanism** | Injects code at entry/exit of every function | OS timer interrupts CPU at fixed frequency (e.g. 99 Hz) |
| **Overhead** | **Extreme (10x - 100x slowdown)** | **Negligible (< 1% CPU overhead)** |
| **Heisenberg Effect** | Severe: Alters CPU cache lines and execution paths | None: Preserves natural instruction pipelining |
| **Production Safe?** |  Never in high-RPS production |  Safe for live production traffic |
| **Standard Tool** | OpenTelemetry, manual `console.time` | Linux `perf`, eBPF, V8 Profiler, pprof |

> ###  Why sample at 99 Hz instead of 100 Hz?
> If the Linux kernel's periodic timer interrupt ticks at 100 Hz (or 1000 Hz), sampling at an exact multiple of 100 Hz creates **lockstep harmonic sampling bias**—your profiler will only sample the kernel during its periodic timer interrupts. A prime frequency like **`99 Hz`** ensures uniform statistical sampling across all user and kernel code.

---

## 2. Hardware Counters & PMUs (Performance Monitoring Units)

Modern CPUs (Intel, AMD, ARM) contain dedicated hardware registers called **PMUs**. They measure silicon-level events with 0 software overhead:

```text
Instruction Fetch ──► L1 Instruction Cache ──► Decode ──► Execution Engine (ALU)
                            │                                   │
                      (L1-icache-miss)                    (Retired Instructions)
                                                                │
                                                          Load / Store
                                                                │
                                                       L1 Data Cache (1 ns)
                                                                │ (L1-dcache-miss)
                                                       L2 Cache (3-4 ns)
                                                                │ (L2-miss)
                                                       L3 Last-Level Cache (10-15 ns)
                                                                │ (LLC-miss)
                                                       Main RAM (60-100 ns Stall!)
```

### Key Metrics:
1. **IPC (Instructions Per Cycle):**
   $$\text{IPC} = \frac{\text{Instructions Retired}}{\text{CPU Cycles}}$$
   * $\text{IPC} > 1.5$: High execution efficiency. CPU pipelines are full.
   * $\text{IPC} < 0.5$: CPU is **stalled** (waiting on memory loads or lock contention).
2. **LLC-load-misses (Last Level Cache):**
   * Fetching data from L1 Cache takes **~1 ns (4 cycles)**.
   * Fetching from Main RAM takes **~60-100 ns (200+ cycles)**.
   * *Lesson:* Dynamic object allocations and pointer-chasing cause L3 cache thrashing. Contiguous memory arrays maximize spatial locality.

---

## 3. Stack Unwinding

To know which function is currently executing, the profiler must "unwind" the call stack:

```text
High Memory
┌───────────────────────────┐
│ main() stack frame        │
├───────────────────────────┤
│ handleRequest() frame     │
├───────────────────────────┤
│ acquire() frame           │
├───────────────────────────┤
│ RBP (Frame Pointer) ──────┼──► Base of current stack frame
│ RIP (Instruction Pointer) │    Current executing instruction address
└───────────────────────────┘
Low Memory (Stack Top - RSP)
```

* **Frame Pointer Unwinding (`-fno-omit-frame-pointer`):**
  The CPU register `RBP` forms a direct linked list of stack frames. The kernel walks this chain in **~10 nanoseconds**.
* **DWARF Unwinding (`-fomit-frame-pointer`):**
  If compilers omit the frame pointer to free up `RBP` for general use, the profiler must read `.eh_frame` DWARF debug tables from disk. This is **100x slower** and can drop samples under heavy load.

---

## 4. The JIT Symbol Problem

In compiled languages (C, C++, Rust, Go), function names live in the binary's `.symtab` symbol table.

In JIT-compiled runtimes (V8 / Node.js / Bun):
1. JavaScript code is compiled into machine code **at runtime** in anonymous dynamic memory pages.
2. When Linux `perf` inspects the Instruction Pointer (RIP), it only sees raw memory addresses (e.g. `0x7fff89ab12c4`), rendering `[unknown]` on the Flame Graph.

### The Solution:
* Start Node.js with **`--perf-basic-prof`** (or `--perf-prof`).
* V8 writes a mapping file to `/tmp/perf-<PID>.map`:
  ```text
  7fff89ab1000 240 LazyCompile:*calculateTokenConsumption src/domain/token_bucket.ts:19
  7fff89ab2000 180 LazyCompile:*acquireToken src/persistence/redis_repository.ts:25
  ```
* Linux `perf script` automatically resolves dynamic memory addresses to real function names!

---

## 5. The Flame Graph Pipeline

```text
1. CAPTURE SAMPLES
   perf record -F 99 -p <PID> -g -- sleep 10
            │
            ▼ (Creates perf.data)
2. EXTRACT CALL STACKS
   perf script > out.perf
            │
            ▼ (Raw stack traces with symbol names)
3. COLLAPSE STACKS INTO SINGLE LINES
   ./tools/FlameGraph/stackcollapse-perf.pl out.perf > out.folded
   Format: "main;handleRequest;acquire;redis.eval 412"
            │
            ▼
4. RENDER INTERACTIVE SVG
   ./tools/FlameGraph/flamegraph.pl out.folded > flamegraph.svg
```

### Anatomy of a Flame Graph:
* **Y-Axis (Vertical):** Call stack depth. Top boxes are **leaf functions** actively running on CPU silicon. Bottom boxes are parent callers.
* **X-Axis (Horizontal):** **Alphabetical/Population sorted** (NOT chronological time!). The width of a box indicates the percentage of total CPU time spent in that function and its children.
* **Plateaus (Wide tops):** Flat horizontal boxes on top are **CPU bottlenecks** (e.g. string formatting, JSON parse, serialization).

---

## 6. On-CPU vs Off-CPU Profiling

| Feature | On-CPU Profiling (`perf record`) | Off-CPU Profiling (`offcputime`) |
| :--- | :--- | :--- |
| **What it measures** | Time spent **burning CPU cycles** | Time spent **blocked / sleeping** |
| **Detects** | Algorithms, hashing, JSON, tight loops | Database I/O, Redis network RTT, thread mutex locks |
| **Kernel Hook** | Timer interrupts / PMU overflow | `sched:sched_switch` (Context switches) |

> ###  The Database Trap:
> If your Redis call takes 5ms, the CPU is **idle** for 4.99ms waiting for the socket read.
> An On-CPU Flame Graph will show Redis taking almost **0% CPU**!
> You need **Off-CPU profiling** to expose why your requests are taking 5ms (waiting on network sockets).

---

## 7. Memory Allocation & GC

* **The Lua GC Problem:** Creating Lua tables `{}` inside Redis for every request triggers Lua Garbage Collection on Redis's single-threaded event loop.
* **The V8 Heap Problem:** Creating temporary objects in Node.js triggers V8 Scavenge (Minor GC) and Mark-Sweep (Major GC) stop-the-world pauses.
* **The Zero-Allocation Solution:**
  1. Pass flat positional arrays (`HMGET` instead of `HGETALL`).
  2. Return positional tuple arrays `[status, tokens_remaining, wait_time]`.

---

## 8. Differential Flame Graphs

To visually prove that an optimization worked:
```bash
# 1. Capture Before & After folded stacks
# 2. Compute differential:
./tools/FlameGraph/difffolded.pl out-before.folded out-after.folded | ./tools/FlameGraph/flamegraph.pl > diff.svg
```
* ** BLUE Boxes:** Code paths that **decreased** in CPU consumption (Success!).
* ** RED Boxes:** Code paths that **increased** in CPU consumption.
* ** WHITE Boxes:** Unchanged.

---

## 9. Production Playbook

### Running V8 Flame Graph Profiler:
```bash
bun run profile:v8
```
* Generates an interactive HTML flame graph in `profiles/`.

### Running Native Linux `perf` Pipeline:
```bash
bun run profile:perf
```
* Generates `profiles/flamegraph.svg` with kernel and JIT symbol resolution.
