#!/usr/bin/env bash
# ==============================================================================
# profile_v8.sh — 100% Bun-Native Production Flame Graph Pipeline
# ==============================================================================
# 1. Runs the distributed rate limiter benchmark under Bun's native CPU profiler.
# 2. Generates both a Markdown profile (.md) and raw V8 profile (.cpuprofile).
# 3. Folds the call stacks and renders Brendan Gregg's official interactive SVG.
# ==============================================================================

set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_DIR="$DIR/profiles"
mkdir -p "$OUTPUT_DIR"

echo "========================================================================"
echo " STARTING PRODUCTION BUN CPU PROFILER & FLAMEGRAPH PIPELINE"
echo "========================================================================"

# 1. Verify Redis
if ! nc -z localhost 6379 2>/dev/null; then
    echo "  Redis not running on port 6379. Starting Redis via docker..."
    docker run -d --name redis-rate-limit-perf -p 6379:6379 redis:alpine || true
    sleep 2
fi

echo "1. Running Benchmark with Bun CPU Profiler (--cpu-prof & --cpu-prof-md)..."
BACKEND=redis REDIS_URL="redis://localhost:6379" bun run \
    --cpu-prof \
    --cpu-prof-md \
    --cpu-prof-dir="$OUTPUT_DIR" \
    --cpu-prof-name="rate_limiter.cpuprofile" \
    "$DIR/src/test/perf/benchmark.ts"

echo ""
echo "2. Folding call stacks and generating Brendan Gregg SVG Flame Graph..."
bun run "$DIR/tools/render_flamegraph.ts"

echo ""
echo "========================================================================"
echo " PROFILING COMPLETE! ARTIFACTS GENERATED:"
echo "    1. Interactive SVG Flame Graph : $OUTPUT_DIR/rate_limiter_flamegraph.svg"
echo "    2. Terminal Markdown Breakdown: $OUTPUT_DIR/rate_limiter.cpuprofile.md"
echo "    3. Raw V8 CPU Profile File    : $OUTPUT_DIR/rate_limiter.cpuprofile.cpuprofile"
echo "========================================================================"
