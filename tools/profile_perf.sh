#!/usr/bin/env bash
# ==============================================================================
# profile_perf.sh — Native Linux `perf` & Brendan Gregg FlameGraph Pipeline
# ==============================================================================
# 1. Launches server with --perf-basic-prof (writes /tmp/perf-<PID>.map for JIT symbols)
# 2. Runs `perf record -F 99 -g -p <PID>` to capture kernel + userspace call stacks
# 3. Uses Brendan Gregg's stackcollapse-perf.pl & flamegraph.pl to generate SVG
# ==============================================================================

set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FLAMEGRAPH_DIR="$DIR/tools/FlameGraph"
OUTPUT_DIR="$DIR/profiles"
mkdir -p "$OUTPUT_DIR"

if [ ! -d "$FLAMEGRAPH_DIR" ]; then
    echo "Cloning Brendan Gregg FlameGraph..."
    git clone https://github.com/brendangregg/FlameGraph.git "$FLAMEGRAPH_DIR"
fi

echo "========================================================================"
echo " LINUX PERF & BRENDAN GREGG FLAMEGRAPH PIPELINE"
echo "========================================================================"

# Check for perf binary
if ! command -v perf &> /dev/null; then
    echo " 'perf' command not found in system PATH."
    echo "   On Linux (Ubuntu/Debian): sudo apt-get install -y linux-tools-common linux-tools-generic linux-tools-\$(uname -r)"
    echo "   On Fedora/RHEL: sudo dnf install -y perf"
    echo "   For non-root profiling, use: ./tools/profile_v8.sh instead!"
    exit 1
fi

# 1. Verify Redis
if ! nc -z localhost 6379 2>/dev/null; then
    echo "⚠️  Redis not running on port 6379. Starting Redis via docker..."
    docker run -d --name redis-rate-limit-perf -p 6379:6379 redis:alpine || true
    sleep 2
fi

echo "1. Starting Server with Bun..."
BACKEND=redis REDIS_URL="redis://localhost:6379" bun run "$DIR/src/cmd/server.ts" &
SERVER_PID=$!
echo "   Server PID: $SERVER_PID"
sleep 3

echo "2. Recording CPU Samples via perf (99 Hz, call-graph fp)..."
perf record -F 99 -p "$SERVER_PID" -g -o "$OUTPUT_DIR/perf.data" -- sleep 12 &
PERF_PID=$!

echo "3. Driving Traffic / Benchmark against Redis..."
BACKEND=redis REDIS_URL="redis://localhost:6379" bun run "$DIR/src/test/perf/benchmark.ts"

wait $PERF_PID 2>/dev/null || true
kill -SIGINT $SERVER_PID || true

echo "4. Processing Samples & Collapsing Stacks..."
perf script -i "$OUTPUT_DIR/perf.data" > "$OUTPUT_DIR/out.perf"
"$FLAMEGRAPH_DIR/stackcollapse-perf.pl" "$OUTPUT_DIR/out.perf" > "$OUTPUT_DIR/out.folded"

echo "5. Generating Flame Graph SVG..."
"$FLAMEGRAPH_DIR/flamegraph.pl" --title "Distributed Rate Limiter CPU FlameGraph" "$OUTPUT_DIR/out.folded" > "$OUTPUT_DIR/flamegraph.svg"

echo "========================================================================"
echo " SVG FLAMEGRAPH GENERATED: $OUTPUT_DIR/flamegraph.svg"
echo "========================================================================"
