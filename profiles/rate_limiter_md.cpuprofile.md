# CPU Profile

| Duration | Samples | Interval | Functions |
|----------|---------|----------|----------|
| 441.5ms | 284 | 1.0ms | 347 |

**Top 10:** `anonymous` 32.1%, `writeBuffered` 14.7%, `processTicksAndRejections` 3.2%, `parseModule` 3.1%, `_write` 2.3%, `async runBenchmark` 2.3%, `log` 2.0%, `resolve` 1.6%, `toWritable` 1.3%, `toWritable` 1.3%

## Hot Functions (Self Time)

| Self% | Self | Total% | Total | Function | Location |
|------:|-----:|-------:|------:|----------|----------|
| 32.1% | 141.7ms | 100.0% | 644.3ms | `anonymous` | `[native code]` |
| 14.7% | 65.0ms | 14.7% | 65.0ms | `writeBuffered` | `[native code]` |
| 3.2% | 14.5ms | 52.0% | 229.6ms | `processTicksAndRejections` | `[native code]` |
| 3.1% | 13.9ms | 40.7% | 179.8ms | `parseModule` | `[native code]` |
| 2.3% | 10.5ms | 2.3% | 10.5ms | `_write` | `internal:streams/writable` |
| 2.3% | 10.4ms | 12.1% | 53.5ms | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:37` |
| 2.0% | 9.1ms | 2.0% | 9.1ms | `log` | `[native code]` |
| 1.6% | 7.2ms | 1.6% | 7.2ms | `resolve` | `[native code]` |
| 1.3% | 6.0ms | 1.3% | 6.0ms | `toWritable` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:152` |
| 1.3% | 5.9ms | 1.9% | 8.4ms | `toWritable` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:150` |
| 1.1% | 5.2ms | 1.1% | 5.2ms | `onwrite` | `internal:streams/writable:305` |
| 1.0% | 4.7ms | 1.0% | 4.7ms | `catch` | `[native code]` |
| 1.0% | 4.4ms | 1.0% | 4.4ms | `isArray` | `[native code]` |
| 1.0% | 4.4ms | 1.0% | 4.4ms | `toString` | `[native code]` |
| 1.0% | 4.4ms | 1.0% | 4.4ms | `fromList` | `internal:streams/readable:851` |
| 0.9% | 4.2ms | 0.9% | 4.2ms | `sendCommand` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:394` |
| 0.8% | 3.6ms | 41.6% | 183.7ms | `(anonymous)` | `[native code]` |
| 0.8% | 3.6ms | 0.8% | 3.6ms | `fetch` | `[native code]` |
| 0.7% | 3.3ms | 0.7% | 3.3ms | `stringifyArguments` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:159` |
| 0.7% | 3.3ms | 0.7% | 3.3ms | `maybeReadMore` | `internal:streams/readable` |
| 0.7% | 3.2ms | 0.7% | 3.2ms | `emit` | `node:events:84` |
| 0.7% | 3.1ms | 0.7% | 3.1ms | `clearBuffer` | `internal:streams/writable` |
| 0.6% | 3.0ms | 0.6% | 3.0ms | `onwrite` | `internal:streams/writable:310` |
| 0.5% | 2.5ms | 1.0% | 4.7ms | `forEach` | `[native code]` |
| 0.5% | 2.5ms | 29.4% | 130.0ms | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts:26` |
| 0.5% | 2.4ms | 0.5% | 2.4ms | `byteLength` | `[native code]` |
| 0.5% | 2.4ms | 0.5% | 2.4ms | `printStats` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` |
| 0.5% | 2.3ms | 0.5% | 2.3ms | `doConnect` | `[native code]` |
| 0.5% | 2.3ms | 0.5% | 2.3ms | `moduleDeclarationInstantiation` | `[native code]` |
| 0.5% | 2.2ms | 0.7% | 3.4ms | `nextTick` | `[native code]` |
| 0.5% | 2.2ms | 0.5% | 2.2ms | `driveAsyncFunction` | `[native code]` |
| 0.5% | 2.2ms | 0.5% | 2.2ms | `convertBufferToString` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:24` |
| 0.5% | 2.2ms | 0.5% | 2.2ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js` |
| 0.4% | 2.1ms | 18.3% | 81.0ms | `writeOrBuffer` | `internal:streams/writable:282` |
| 0.4% | 2.1ms | 0.4% | 2.1ms | `onEofChunk` | `internal:streams/readable` |
| 0.4% | 2.0ms | 0.4% | 2.0ms | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:42` |
| 0.4% | 2.0ms | 0.4% | 2.0ms | `@lazy` | `[native code]` |
| 0.4% | 2.0ms | 0.4% | 2.0ms | `onwrite` | `internal:streams/writable:327` |
| 0.4% | 1.9ms | 0.4% | 1.9ms | `read` | `node:net` |
| 0.4% | 1.8ms | 0.4% | 1.8ms | `newRegistryEntry` | `[native code]` |
| 0.4% | 1.8ms | 0.4% | 1.8ms | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js:38` |
| 0.3% | 1.3ms | 0.3% | 1.3ms | `maybeReadMore` | `internal:streams/readable:399` |
| 0.3% | 1.3ms | 0.3% | 1.3ms | `ensure` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/buffer-writer.js` |
| 0.3% | 1.3ms | 0.3% | 1.3ms | `handleSubscriberReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js` |
| 0.2% | 1.3ms | 0.2% | 1.3ms | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts` |
| 0.2% | 1.2ms | 44.3% | 195.6ms | `async (anonymous)` | `[native code]` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `newDetachedSocket` | `[native code]` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `ReadableState` | `internal:streams/readable` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `init` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/node.js` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `getStreamFuncs` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/stream.js` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `writeOrBuffer` | `internal:streams/writable:271` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `checkError` | `internal:streams/destroy` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `reduce` | `[native code]` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `(anonymous)` | `internal:streams/writable` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `LazyTransform` | `internal:streams/lazy_transform` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection-parameters.js:9` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `internal:stream` | `internal:stream:57` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `enable` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `parse` | `node:url` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `transformReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:180` |
| 0.2% | 1.2ms | 0.5% | 2.3ms | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js:47` |
| 0.2% | 1.2ms | 15.0% | 66.2ms | `_write` | `node:net:890` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `maybeReadMore_` | `internal:streams/readable:403` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `onwrite` | `internal:streams/writable:324` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:494` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `slice` | `[native code]` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `internal:util/inspect` | `internal:util/inspect:9` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `test` | `[native code]` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `WritableState` | `internal:streams/writable` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:334` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `unshift` | `[native code]` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `async worker` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:84` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `async worker` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `bind` | `[native code]` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `filter` | `[native code]` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/@ioredis/commands/built/index.js:16` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts:31` |
| 0.2% | 1.0ms | 0.5% | 2.3ms | `checkFlag` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:77` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `lookup` | `[native code]` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `_unrefTimer` | `node:net:836` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `apply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:38` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `(anonymous)` | `node:net` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `toWritable` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:112` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `_read` | `node:net` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `connect` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js` |
| 0.2% | 1.0ms | 100.0% | 518.2ms | `bound require` | `[native code]` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `async worker` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:80` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `createSafeIterator` | `internal:primordials:3` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `set` | `[native code]` |
| 0.2% | 1.0ms | 1.8% | 7.9ms | `data` | `node:net:281` |
| 0.2% | 1.0ms | 0.7% | 3.3ms | `Redis` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:52` |
| 0.2% | 996us | 0.2% | 996us | `WriteStream` | `internal:fs/streams` |
| 0.2% | 995us | 0.2% | 995us | `node:fs` | `node:fs:509` |
| 0.2% | 975us | 0.2% | 975us | `endBuffered` | `[native code]` |
| 0.2% | 939us | 0.2% | 939us | `handleMonitorReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:151` |
| 0.2% | 922us | 0.2% | 922us | `prependListener` | `node:events` |

## Call Tree (Total Time)

| Total% | Total | Self% | Self | Function | Location |
|-------:|------:|------:|-----:|----------|----------|
| 100.0% | 644.3ms | 32.1% | 141.7ms | `anonymous` | `[native code]` |
| 100.0% | 518.2ms | 0.2% | 1.0ms | `bound require` | `[native code]` |
| 100.0% | 488.2ms | 0.0% | 0us | `require` | `[native code]` |
| 52.0% | 229.6ms | 3.2% | 14.5ms | `processTicksAndRejections` | `[native code]` |
| 44.3% | 195.6ms | 0.2% | 1.2ms | `async (anonymous)` | `[native code]` |
| 41.6% | 183.7ms | 0.8% | 3.6ms | `(anonymous)` | `[native code]` |
| 40.7% | 179.8ms | 3.1% | 13.9ms | `parseModule` | `[native code]` |
| 29.4% | 130.0ms | 0.5% | 2.5ms | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts:26` |
| 28.6% | 126.4ms | 0.0% | 0us | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts:36` |
| 28.3% | 125.0ms | 0.0% | 0us | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:25` |
| 27.8% | 122.8ms | 0.0% | 0us | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:30` |
| 24.5% | 108.4ms | 0.0% | 0us | `sendCommand` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:406` |
| 21.0% | 92.8ms | 0.0% | 0us | `(anonymous)` | `internal:streams/writable:248` |
| 19.6% | 86.9ms | 0.0% | 0us | `async worker` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:82` |
| 18.5% | 82.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/index.js:4` |
| 18.3% | 81.0ms | 0.4% | 2.1ms | `writeOrBuffer` | `internal:streams/writable:282` |
| 15.0% | 66.2ms | 0.2% | 1.2ms | `_write` | `node:net:890` |
| 14.7% | 65.0ms | 14.7% | 65.0ms | `writeBuffered` | `[native code]` |
| 13.1% | 57.9ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:6` |
| 12.2% | 54.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/index.js:3` |
| 12.1% | 53.5ms | 2.3% | 10.4ms | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:37` |
| 5.7% | 25.5ms | 0.0% | 0us | `emitReadable_` | `internal:streams/readable:396` |
| 5.7% | 25.5ms | 0.0% | 0us | `flow` | `internal:streams/readable:594` |
| 5.5% | 24.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:4` |
| 4.5% | 20.1ms | 0.0% | 0us | `emit` | `node:events:95` |
| 4.5% | 19.9ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:7` |
| 4.3% | 19.2ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:370` |
| 4.3% | 19.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:26` |
| 4.1% | 18.3ms | 0.0% | 0us | `moduleEvaluation` | `[native code]` |
| 4.0% | 18.0ms | 0.0% | 0us | `async loadAndEvaluateModule` | `[native code]` |
| 3.8% | 16.8ms | 0.0% | 0us | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:544` |
| 3.8% | 16.8ms | 0.0% | 0us | `returnReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:21` |
| 3.3% | 14.7ms | 0.0% | 0us | `get ReadStream` | `node:fs:578` |
| 3.2% | 14.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:6` |
| 3.0% | 13.5ms | 0.0% | 0us | `internal:fs/streams` | `internal:fs/streams:2` |
| 3.0% | 13.5ms | 0.0% | 0us | `node:stream` | `node:stream:2` |
| 3.0% | 13.4ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:323` |
| 3.0% | 13.4ms | 0.0% | 0us | `returnReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:74` |
| 2.7% | 12.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/utils.js:3` |
| 2.6% | 11.4ms | 0.0% | 0us | `bound onwrite` | `[native code]` |
| 2.6% | 11.4ms | 0.0% | 0us | `_write` | `node:net:892` |
| 2.5% | 11.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/defaults.js:82` |
| 2.5% | 11.1ms | 0.0% | 0us | `transformReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:178` |
| 2.5% | 11.0ms | 0.0% | 0us | `internal:stream` | `internal:stream:2` |
| 2.5% | 11.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/utils.js:5` |
| 2.4% | 10.7ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:12` |
| 2.3% | 10.5ms | 2.3% | 10.5ms | `_write` | `internal:streams/writable` |
| 2.2% | 10.1ms | 0.0% | 0us | `node:util` | `node:util:2` |
| 2.2% | 10.1ms | 0.0% | 0us | `internal:streams/operators` | `internal:streams/operators:2` |
| 2.0% | 9.1ms | 2.0% | 9.1ms | `log` | `[native code]` |
| 2.0% | 9.1ms | 0.0% | 0us | `(module)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:110` |
| 2.0% | 9.1ms | 0.0% | 0us | `evaluate` | `[native code]` |
| 1.9% | 8.4ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:11` |
| 1.9% | 8.4ms | 1.3% | 5.9ms | `toWritable` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:150` |
| 1.9% | 8.4ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:5` |
| 1.8% | 8.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection.js:5` |
| 1.8% | 8.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:10` |
| 1.8% | 8.0ms | 0.0% | 0us | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:42` |
| 1.8% | 8.0ms | 0.0% | 0us | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:19` |
| 1.8% | 7.9ms | 0.2% | 1.0ms | `data` | `node:net:281` |
| 1.8% | 7.9ms | 0.0% | 0us | `internal:streams/compose` | `internal:streams/compose:2` |
| 1.7% | 7.7ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:16` |
| 1.7% | 7.5ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:10` |
| 1.6% | 7.4ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/transaction.js:6` |
| 1.6% | 7.4ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-errors/lib/modern.js:3` |
| 1.6% | 7.4ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-errors/index.js:3` |
| 1.6% | 7.2ms | 1.6% | 7.2ms | `resolve` | `[native code]` |
| 1.6% | 7.2ms | 0.0% | 0us | `bound onceWrapper` | `[native code]` |
| 1.6% | 7.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:8` |
| 1.6% | 7.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/index.js:1` |
| 1.5% | 6.9ms | 0.0% | 0us | `internal:streams/pipeline` | `internal:streams/pipeline:2` |
| 1.5% | 6.9ms | 0.0% | 0us | `addChunk` | `internal:streams/readable:276` |
| 1.5% | 6.9ms | 0.0% | 0us | `readableAddChunkPushByteMode` | `internal:streams/readable:242` |
| 1.5% | 6.9ms | 0.0% | 0us | `link` | `[native code]` |
| 1.5% | 6.9ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/debug.js:4` |
| 1.5% | 6.9ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/index.js:9` |
| 1.4% | 6.5ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:6` |
| 1.4% | 6.5ms | 0.0% | 0us | `async loadModule` | `[native code]` |
| 1.4% | 6.3ms | 0.0% | 0us | `emit` | `node:events:92` |
| 1.3% | 6.0ms | 1.3% | 6.0ms | `toWritable` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:152` |
| 1.3% | 5.7ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:9` |
| 1.2% | 5.7ms | 0.0% | 0us | `internal:streams/duplex` | `internal:streams/duplex:2` |
| 1.2% | 5.5ms | 0.0% | 0us | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:23` |
| 1.2% | 5.4ms | 0.0% | 0us | `get` | `node:assert:70` |
| 1.2% | 5.4ms | 0.0% | 0us | `node:assert` | `node:assert:588` |
| 1.2% | 5.4ms | 0.0% | 0us | `loadAssertionError` | `node:assert:28` |
| 1.2% | 5.4ms | 0.0% | 0us | `assign` | `[native code]` |
| 1.1% | 5.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/ClusterSubscriber.js:3` |
| 1.1% | 5.2ms | 0.0% | 0us | `node:path` | `node:path:2` |
| 1.1% | 5.2ms | 1.1% | 5.2ms | `onwrite` | `internal:streams/writable:305` |
| 1.0% | 4.8ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/StandaloneConnector.js:54` |
| 1.0% | 4.8ms | 0.0% | 0us | `node:fs` | `node:fs:2` |
| 1.0% | 4.7ms | 0.5% | 2.5ms | `forEach` | `[native code]` |
| 1.0% | 4.7ms | 0.0% | 0us | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js:48` |
| 1.0% | 4.7ms | 1.0% | 4.7ms | `catch` | `[native code]` |
| 1.0% | 4.5ms | 0.0% | 0us | `internal:assert/assertion_error` | `internal:assert/assertion_error:2` |
| 1.0% | 4.4ms | 0.0% | 0us | `convertBufferToString` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:27` |
| 1.0% | 4.4ms | 1.0% | 4.4ms | `isArray` | `[native code]` |
| 1.0% | 4.4ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:354` |
| 1.0% | 4.4ms | 1.0% | 4.4ms | `toString` | `[native code]` |
| 1.0% | 4.4ms | 1.0% | 4.4ms | `fromList` | `internal:streams/readable:851` |
| 1.0% | 4.4ms | 0.0% | 0us | `convertBufferToString` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:33` |
| 0.9% | 4.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/util.js:5` |
| 0.9% | 4.3ms | 0.0% | 0us | `RedisRateLimitRepository` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:14` |
| 0.9% | 4.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:8` |
| 0.9% | 4.2ms | 0.0% | 0us | `internal:shared` | `internal:shared:2` |
| 0.9% | 4.2ms | 0.0% | 0us | `internal:validators` | `internal:validators:2` |
| 0.9% | 4.2ms | 0.9% | 4.2ms | `sendCommand` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:394` |
| 0.9% | 4.1ms | 0.0% | 0us | `(anonymous)` | `node:net:1470` |
| 0.8% | 3.9ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Pipeline.js:9` |
| 0.8% | 3.8ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/index.js:6` |
| 0.8% | 3.6ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:3` |
| 0.8% | 3.6ms | 0.0% | 0us | `requestInstantiate` | `[native code]` |
| 0.8% | 3.6ms | 0.8% | 3.6ms | `fetch` | `[native code]` |
| 0.8% | 3.6ms | 0.0% | 0us | `requestSatisfyUtil` | `[native code]` |
| 0.8% | 3.6ms | 0.0% | 0us | `requestFetch` | `[native code]` |
| 0.8% | 3.6ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:7` |
| 0.8% | 3.5ms | 0.0% | 0us | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:49` |
| 0.7% | 3.4ms | 0.5% | 2.2ms | `nextTick` | `[native code]` |
| 0.7% | 3.4ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/node.js:240` |
| 0.7% | 3.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/index.js:6` |
| 0.7% | 3.3ms | 0.0% | 0us | `bound call` | `[native code]` |
| 0.7% | 3.3ms | 0.0% | 0us | `async close` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:50` |
| 0.7% | 3.3ms | 0.0% | 0us | `async close` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:49` |
| 0.7% | 3.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:282` |
| 0.7% | 3.3ms | 0.0% | 0us | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:64` |
| 0.7% | 3.3ms | 0.0% | 0us | `initPromise` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:275` |
| 0.7% | 3.3ms | 0.0% | 0us | `Promise` | `[native code]` |
| 0.7% | 3.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:92` |
| 0.7% | 3.3ms | 0.0% | 0us | `Command` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:46` |
| 0.7% | 3.3ms | 0.7% | 3.3ms | `stringifyArguments` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:159` |
| 0.7% | 3.3ms | 0.7% | 3.3ms | `maybeReadMore` | `internal:streams/readable` |
| 0.7% | 3.3ms | 0.2% | 1.0ms | `Redis` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:52` |
| 0.7% | 3.2ms | 0.0% | 0us | `refresh` | `internal:util/colors:18` |
| 0.7% | 3.2ms | 0.0% | 0us | `internal:util/colors` | `internal:util/colors:24` |
| 0.7% | 3.2ms | 0.0% | 0us | `WriteStream` | `node:tty:42` |
| 0.7% | 3.2ms | 0.0% | 0us | `afterConnectMultiple` | `node:net:1173` |
| 0.7% | 3.2ms | 0.0% | 0us | `bound afterConnectMultiple` | `[native code]` |
| 0.7% | 3.2ms | 0.0% | 0us | `open` | `node:net:265` |
| 0.7% | 3.2ms | 0.0% | 0us | `afterConnect` | `node:net:1149` |
| 0.7% | 3.2ms | 0.7% | 3.2ms | `emit` | `node:events:84` |
| 0.7% | 3.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:5` |
| 0.7% | 3.1ms | 0.0% | 0us | `(anonymous)` | `internal:streams/writable:197` |
| 0.7% | 3.1ms | 0.7% | 3.1ms | `clearBuffer` | `internal:streams/writable` |
| 0.7% | 3.1ms | 0.0% | 0us | `onConstructed` | `internal:streams/writable:168` |
| 0.7% | 3.1ms | 0.0% | 0us | `onConstruct` | `internal:streams/destroy:144` |
| 0.7% | 3.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/utils.js:8` |
| 0.7% | 3.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/sasl.js:2` |
| 0.6% | 3.0ms | 0.6% | 3.0ms | `onwrite` | `internal:streams/writable:310` |
| 0.6% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:21` |
| 0.6% | 2.9ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/index.js:4` |
| 0.5% | 2.5ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/index.js:8` |
| 0.5% | 2.5ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/index.js:8` |
| 0.5% | 2.4ms | 0.5% | 2.4ms | `byteLength` | `[native code]` |
| 0.5% | 2.4ms | 0.5% | 2.4ms | `printStats` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` |
| 0.5% | 2.4ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection-parameters.js:3` |
| 0.5% | 2.3ms | 0.2% | 1.2ms | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js:47` |
| 0.5% | 2.3ms | 0.0% | 0us | `(anonymous)` | `node:dns:200` |
| 0.5% | 2.3ms | 0.0% | 0us | `internalConnectMultiple` | `node:net:1120` |
| 0.5% | 2.3ms | 0.5% | 2.3ms | `doConnect` | `[native code]` |
| 0.5% | 2.3ms | 0.0% | 0us | `emitLookup` | `node:net:1022` |
| 0.5% | 2.3ms | 0.0% | 0us | `kConnectTcp` | `node:net:356` |
| 0.5% | 2.3ms | 0.2% | 1.0ms | `checkFlag` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:77` |
| 0.5% | 2.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/node.js:32` |
| 0.5% | 2.3ms | 0.0% | 0us | `linkAndEvaluateModule` | `[native code]` |
| 0.5% | 2.3ms | 0.5% | 2.3ms | `moduleDeclarationInstantiation` | `[native code]` |
| 0.5% | 2.2ms | 0.0% | 0us | `parseOptions` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:621` |
| 0.5% | 2.2ms | 0.0% | 0us | `WriteStream` | `internal:fs/streams:245` |
| 0.5% | 2.2ms | 0.0% | 0us | `maybeReadMore` | `internal:streams/readable:400` |
| 0.5% | 2.2ms | 0.5% | 2.2ms | `driveAsyncFunction` | `[native code]` |
| 0.5% | 2.2ms | 0.5% | 2.2ms | `convertBufferToString` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:24` |
| 0.5% | 2.2ms | 0.5% | 2.2ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js` |
| 0.5% | 2.2ms | 0.0% | 0us | `connect` | `node:net:630` |
| 0.5% | 2.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/DelayQueue.js:4` |
| 0.5% | 2.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:18` |
| 0.5% | 2.2ms | 0.0% | 0us | `makeSafe` | `internal:primordials:30` |
| 0.5% | 2.2ms | 0.0% | 0us | `async runConcurrentRequests` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:91` |
| 0.5% | 2.2ms | 0.0% | 0us | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:46` |
| 0.5% | 2.2ms | 0.0% | 0us | `async worker` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:77` |
| 0.5% | 2.2ms | 0.0% | 0us | `async runConcurrentRequests` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:69` |
| 0.4% | 2.1ms | 0.0% | 0us | `end` | `node:net:300` |
| 0.4% | 2.1ms | 0.4% | 2.1ms | `onEofChunk` | `internal:streams/readable` |
| 0.4% | 2.1ms | 0.0% | 0us | `readableAddChunkPushByteMode` | `internal:streams/readable:222` |
| 0.4% | 2.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:4` |
| 0.4% | 2.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/index.js:2` |
| 0.4% | 2.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/index.js:3` |
| 0.4% | 2.0ms | 0.4% | 2.0ms | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:42` |
| 0.4% | 2.0ms | 0.4% | 2.0ms | `@lazy` | `[native code]` |
| 0.4% | 2.0ms | 0.4% | 2.0ms | `onwrite` | `internal:streams/writable:327` |
| 0.4% | 1.9ms | 0.4% | 1.9ms | `read` | `node:net` |
| 0.4% | 1.9ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/utils-webcrypto.js:1` |
| 0.4% | 1.8ms | 0.0% | 0us | `ensureRegistered` | `[native code]` |
| 0.4% | 1.8ms | 0.4% | 1.8ms | `newRegistryEntry` | `[native code]` |
| 0.4% | 1.8ms | 0.4% | 1.8ms | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js:38` |
| 0.4% | 1.8ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/StandaloneConnector.js:4` |
| 0.3% | 1.3ms | 0.0% | 0us | `requestSatisfy` | `[native code]` |
| 0.3% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:61` |
| 0.3% | 1.3ms | 0.3% | 1.3ms | `maybeReadMore` | `internal:streams/readable:399` |
| 0.3% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/standard-as-callback/built/index.js:22` |
| 0.3% | 1.3ms | 0.0% | 0us | `tryCatcher` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/standard-as-callback/built/utils.js:12` |
| 0.3% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:721` |
| 0.3% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:93` |
| 0.3% | 1.3ms | 0.0% | 0us | `node:fs` | `node:fs:307` |
| 0.3% | 1.3ms | 0.3% | 1.3ms | `ensure` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/buffer-writer.js` |
| 0.3% | 1.3ms | 0.0% | 0us | `addCString` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/buffer-writer.js:43` |
| 0.3% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/serializer.js:144` |
| 0.3% | 1.3ms | 0.0% | 0us | `returnReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:54` |
| 0.3% | 1.3ms | 0.3% | 1.3ms | `handleSubscriberReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js` |
| 0.2% | 1.3ms | 0.2% | 1.3ms | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts` |
| 0.2% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/@ioredis/commands/built/index.js:7` |
| 0.2% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:4` |
| 0.2% | 1.2ms | 0.0% | 0us | `connect` | `node:net:628` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `newDetachedSocket` | `[native code]` |
| 0.2% | 1.2ms | 0.0% | 0us | `Duplex` | `internal:streams/duplex:15` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `ReadableState` | `internal:streams/readable` |
| 0.2% | 1.2ms | 0.0% | 0us | `Socket` | `node:net:401` |
| 0.2% | 1.2ms | 0.0% | 0us | `createConnection` | `node:net:899` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `init` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/node.js` |
| 0.2% | 1.2ms | 0.0% | 0us | `createDebug` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js:143` |
| 0.2% | 1.2ms | 0.0% | 0us | `genDebugFunction` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/debug.js:54` |
| 0.2% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/ClusterSubscriber.js:6` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `getStreamFuncs` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/stream.js` |
| 0.2% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/stream.js:1` |
| 0.2% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection.js:6` |
| 0.2% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/ConnectionPool.js:4` |
| 0.2% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:17` |
| 0.2% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:10` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `writeOrBuffer` | `internal:streams/writable:271` |
| 0.2% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:70` |
| 0.2% | 1.2ms | 0.0% | 0us | `destroy` | `internal:streams/destroy:32` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `checkError` | `internal:streams/destroy` |
| 0.2% | 1.2ms | 0.0% | 0us | `finish` | `internal:streams/writable:478` |
| 0.2% | 1.2ms | 0.0% | 0us | `(anonymous)` | `internal:streams/writable:596` |
| 0.2% | 1.2ms | 0.0% | 0us | `sendCommand` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:344` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `reduce` | `[native code]` |
| 0.2% | 1.2ms | 0.0% | 0us | `getBlockingTimeoutInMs` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:435` |
| 0.2% | 1.2ms | 0.0% | 0us | `getFlagMap` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:87` |
| 0.2% | 1.2ms | 0.0% | 0us | `endWritableNT` | `internal:streams/readable:876` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `(anonymous)` | `internal:streams/writable` |
| 0.2% | 1.2ms | 0.0% | 0us | `Script` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js:12` |
| 0.2% | 1.2ms | 0.0% | 0us | `RedisRateLimitRepository` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:17` |
| 0.2% | 1.2ms | 0.0% | 0us | `defineCommand` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:47` |
| 0.2% | 1.2ms | 0.0% | 0us | `Hash` | `node:crypto:179` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `LazyTransform` | `internal:streams/lazy_transform` |
| 0.2% | 1.2ms | 0.0% | 0us | `createHash` | `node:crypto:201` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection-parameters.js:9` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `internal:stream` | `internal:stream:57` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `enable` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js` |
| 0.2% | 1.2ms | 0.0% | 0us | `setup` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js:287` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `parse` | `node:url` |
| 0.2% | 1.2ms | 0.0% | 0us | `urlParse` | `node:url:31` |
| 0.2% | 1.2ms | 0.0% | 0us | `parseURL` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:205` |
| 0.2% | 1.2ms | 0.2% | 1.2ms | `transformReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:180` |
| 0.2% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/lodash.js:6` |
| 0.2% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/supports-color/index.js:4` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `maybeReadMore_` | `internal:streams/readable:403` |
| 0.2% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/lodash.js:4` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `onwrite` | `internal:streams/writable:324` |
| 0.2% | 1.1ms | 0.0% | 0us | `internal:primordials` | `internal:primordials:78` |
| 0.2% | 1.1ms | 0.0% | 0us | `parseArrayElements` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:263` |
| 0.2% | 1.1ms | 0.0% | 0us | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:533` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:494` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `slice` | `[native code]` |
| 0.2% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/SentinelConnector/index.js:11` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `internal:util/inspect` | `internal:util/inspect:9` |
| 0.2% | 1.1ms | 0.0% | 0us | `lookupAndConnect` | `node:net:924` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `test` | `[native code]` |
| 0.2% | 1.1ms | 0.0% | 0us | `isIP` | `internal:net/isIP:14` |
| 0.2% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:6` |
| 0.2% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/errors/index.js:4` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:334` |
| 0.2% | 1.1ms | 0.0% | 0us | `Writable` | `internal:streams/writable:181` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `WritableState` | `internal:streams/writable` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `unshift` | `[native code]` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `async worker` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:84` |
| 0.2% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection-parameters.js:7` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `async worker` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` |
| 0.2% | 1.1ms | 0.0% | 0us | `printStats` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:103` |
| 0.2% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:12` |
| 0.2% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:4` |
| 0.2% | 1.1ms | 0.0% | 0us | `setup` | `[native code]` |
| 0.2% | 1.1ms | 0.0% | 0us | `construct` | `internal:streams/destroy:124` |
| 0.2% | 1.1ms | 0.0% | 0us | `Writable` | `internal:streams/writable:196` |
| 0.2% | 1.1ms | 0.0% | 0us | `internal:primordials` | `internal:primordials:50` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `bind` | `[native code]` |
| 0.2% | 1.1ms | 0.0% | 0us | `node:events` | `node:events:9` |
| 0.2% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Pipeline.js:7` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `filter` | `[native code]` |
| 0.2% | 1.1ms | 0.0% | 0us | `internal:util/inspect` | `internal:util/inspect:179` |
| 0.2% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/@ioredis/commands/built/index.js:15` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/@ioredis/commands/built/index.js:16` |
| 0.2% | 1.1ms | 0.2% | 1.1ms | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts:31` |
| 0.2% | 1.0ms | 0.0% | 0us | `internal:streams/readable` | `internal:streams/readable:2` |
| 0.2% | 1.0ms | 0.0% | 0us | `returnReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:68` |
| 0.2% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/StandaloneConnector.js:6` |
| 0.2% | 1.0ms | 0.0% | 0us | `lookupAndConnectMultiple` | `node:net:971` |
| 0.2% | 1.0ms | 0.0% | 0us | `lookup` | `node:dns:194` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `lookup` | `[native code]` |
| 0.2% | 1.0ms | 0.0% | 0us | `lookupAndConnect` | `node:net:945` |
| 0.2% | 1.0ms | 0.0% | 0us | `_write` | `node:net:889` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `_unrefTimer` | `node:net:836` |
| 0.2% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:638` |
| 0.2% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:189` |
| 0.2% | 1.0ms | 0.0% | 0us | `parseURL` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:239` |
| 0.2% | 1.0ms | 0.0% | 0us | `apply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:34` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `apply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:38` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `(anonymous)` | `node:net` |
| 0.2% | 1.0ms | 0.0% | 0us | `node:fs/promises` | `node:fs/promises:2` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `toWritable` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:112` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `_read` | `node:net` |
| 0.2% | 1.0ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:345` |
| 0.2% | 1.0ms | 0.0% | 0us | `resume_` | `internal:streams/readable:582` |
| 0.2% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/ClusterSubscriberGroup.js:6` |
| 0.2% | 1.0ms | 0.0% | 0us | `internal:util/inspect` | `internal:util/inspect:2` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `connect` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js` |
| 0.2% | 1.0ms | 0.0% | 0us | `Redis` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:77` |
| 0.2% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:10` |
| 0.2% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/query.js:5` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `async worker` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:80` |
| 0.2% | 1.0ms | 0.0% | 0us | `internal:primordials` | `internal:primordials:71` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `createSafeIterator` | `internal:primordials:3` |
| 0.2% | 1.0ms | 0.0% | 0us | `(anonymous)` | `internal:primordials:38` |
| 0.2% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/postgres-interval/index.js:3` |
| 0.2% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/standard-as-callback/built/index.js:3` |
| 0.2% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:5` |
| 0.2% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:2` |
| 0.2% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:3` |
| 0.2% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:13` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `set` | `[native code]` |
| 0.2% | 996us | 0.2% | 996us | `WriteStream` | `internal:fs/streams` |
| 0.2% | 995us | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:5` |
| 0.2% | 995us | 0.2% | 995us | `node:fs` | `node:fs:509` |
| 0.2% | 992us | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/sasl.js:3` |
| 0.2% | 990us | 0.0% | 0us | `node:crypto` | `node:crypto:55` |
| 0.2% | 975us | 0.0% | 0us | `endNT` | `node:net:5` |
| 0.2% | 975us | 0.2% | 975us | `endBuffered` | `[native code]` |
| 0.2% | 974us | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/index.js:4` |
| 0.2% | 971us | 0.0% | 0us | `setup` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js:14` |
| 0.2% | 939us | 0.2% | 939us | `handleMonitorReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:151` |
| 0.2% | 939us | 0.0% | 0us | `returnReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:51` |
| 0.2% | 922us | 0.2% | 922us | `prependListener` | `node:events` |
| 0.2% | 922us | 0.0% | 0us | `DataHandler` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:25` |
| 0.2% | 922us | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:52` |
| 0.2% | 915us | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/index.js:4` |
| 0.2% | 908us | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:1` |

## Function Details

### `anonymous`
`[native code]` | Self: 32.1% (141.7ms) | Total: 100.0% (644.3ms) | Samples: 125

**Called by:**
- `require` (434)
- `bound require` (27)
- `get ReadStream` (13)
- `internal:fs/streams` (12)
- `node:stream` (12)
- `internal:stream` (10)
- `node:util` (9)
- `internal:streams/operators` (9)
- `internal:streams/compose` (7)
- `internal:streams/pipeline` (6)
- `node:path` (5)
- `loadAssertionError` (5)
- `internal:streams/duplex` (5)
- `internal:assert/assertion_error` (4)
- `internal:validators` (4)
- `node:fs` (4)
- `internal:shared` (4)
- `setup` (1)
- `node:fs` (1)
- `internal:streams/readable` (1)
- `internal:util/inspect` (1)
- `node:events` (1)

**Calls:**
- `(anonymous)` (51)
- `(anonymous)` (23)
- `(anonymous)` (17)
- `internal:fs/streams` (12)
- `node:stream` (12)
- `(anonymous)` (12)
- `(anonymous)` (12)
- `(anonymous)` (11)
- `internal:stream` (10)
- `(anonymous)` (10)
- `internal:streams/operators` (9)
- `(anonymous)` (9)
- `node:util` (9)
- `(anonymous)` (8)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `internal:streams/compose` (7)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `(anonymous)` (6)
- `(anonymous)` (6)
- `(anonymous)` (6)
- `internal:streams/pipeline` (6)
- `(anonymous)` (6)
- `node:assert` (5)
- `(anonymous)` (5)
- `(anonymous)` (5)
- `internal:streams/duplex` (5)
- `internal:shared` (4)
- `internal:validators` (4)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `internal:assert/assertion_error` (4)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `internal:util/colors` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:primordials` (1)
- `(anonymous)` (1)
- `node:events` (1)
- `(anonymous)` (1)
- `internal:primordials` (1)
- `(anonymous)` (1)
- `internal:util/inspect` (1)
- `internal:util/inspect` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:util/inspect` (1)
- `(anonymous)` (1)
- `node:crypto` (1)
- `internal:primordials` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `node:fs/promises` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:streams/readable` (1)
- `internal:stream` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `writeBuffered`
`[native code]` | Self: 14.7% (65.0ms) | Total: 14.7% (65.0ms) | Samples: 30

**Called by:**
- `_write` (30)

### `processTicksAndRejections`
`[native code]` | Self: 3.2% (14.5ms) | Total: 52.0% (229.6ms) | Samples: 2

**Calls:**
- `(anonymous)` (82)
- `emitReadable_` (13)
- `(anonymous)` (4)
- `endNT` (1)
- `endWritableNT` (1)
- `onConstruct` (1)
- `maybeReadMore_` (1)
- `resume_` (1)
- `finish` (1)

### `parseModule`
`[native code]` | Self: 3.1% (13.9ms) | Total: 40.7% (179.8ms) | Samples: 12

**Called by:**
- `async (anonymous)` (158)

**Calls:**
- `(anonymous)` (72)
- `(anonymous)` (48)
- `get ReadStream` (13)
- `node:path` (5)
- `node:fs` (4)
- `(anonymous)` (2)
- `node:fs` (1)
- `node:fs` (1)

### `_write`
`internal:streams/writable` | Self: 2.3% (10.5ms) | Total: 2.3% (10.5ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:37` | Self: 2.3% (10.4ms) | Total: 12.1% (53.5ms) | Samples: 2

**Called by:**
- `(anonymous)` (15)
- `async runBenchmark` (2)

**Calls:**
- `async acquire` (15)

### `log`
`[native code]` | Self: 2.0% (9.1ms) | Total: 2.0% (9.1ms) | Samples: 2

**Called by:**
- `printStats` (1)
- `async runBenchmark` (1)

### `resolve`
`[native code]` | Self: 1.6% (7.2ms) | Total: 1.6% (7.2ms) | Samples: 2

**Called by:**
- `async (anonymous)` (2)

### `toWritable`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:152` | Self: 1.3% (6.0ms) | Total: 1.3% (6.0ms) | Samples: 1

**Called by:**
- `sendCommand` (1)

### `toWritable`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:150` | Self: 1.3% (5.9ms) | Total: 1.9% (8.4ms) | Samples: 2

**Called by:**
- `sendCommand` (4)

**Calls:**
- `byteLength` (2)

### `onwrite`
`internal:streams/writable:305` | Self: 1.1% (5.2ms) | Total: 1.1% (5.2ms) | Samples: 1

**Called by:**
- `bound onwrite` (1)

### `catch`
`[native code]` | Self: 1.0% (4.7ms) | Total: 1.0% (4.7ms) | Samples: 1

**Called by:**
- `execute` (1)

### `isArray`
`[native code]` | Self: 1.0% (4.4ms) | Total: 1.0% (4.4ms) | Samples: 1

**Called by:**
- `convertBufferToString` (1)

### `toString`
`[native code]` | Self: 1.0% (4.4ms) | Total: 1.0% (4.4ms) | Samples: 2

**Called by:**
- `convertBufferToString` (2)

### `fromList`
`internal:streams/readable:851` | Self: 1.0% (4.4ms) | Total: 1.0% (4.4ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `sendCommand`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:394` | Self: 0.9% (4.2ms) | Total: 0.9% (4.2ms) | Samples: 1

**Called by:**
- `async acquire` (1)

### `(anonymous)`
`[native code]` | Self: 0.8% (3.6ms) | Total: 41.6% (183.7ms) | Samples: 3

**Called by:**
- `processTicksAndRejections` (82)
- `refresh` (3)
- `(anonymous)` (1)

**Calls:**
- `async worker` (44)
- `async runBenchmark` (15)
- `async loadAndEvaluateModule` (10)
- `WriteStream` (3)
- `async runBenchmark` (2)
- `requestSatisfyUtil` (2)
- `async runBenchmark` (2)
- `async (anonymous)` (1)
- `async worker` (1)
- `async runBenchmark` (1)
- `async acquire` (1)
- `(anonymous)` (1)
- `async worker` (1)
- `(anonymous)` (1)
- `async runBenchmark` (1)

### `fetch`
`[native code]` | Self: 0.8% (3.6ms) | Total: 0.8% (3.6ms) | Samples: 3

**Called by:**
- `requestFetch` (3)

### `stringifyArguments`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:159` | Self: 0.7% (3.3ms) | Total: 0.7% (3.3ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `maybeReadMore`
`internal:streams/readable` | Self: 0.7% (3.3ms) | Total: 0.7% (3.3ms) | Samples: 1

**Called by:**
- `addChunk` (1)

### `emit`
`node:events:84` | Self: 0.7% (3.2ms) | Total: 0.7% (3.2ms) | Samples: 2

**Called by:**
- `(anonymous)` (2)

### `clearBuffer`
`internal:streams/writable` | Self: 0.7% (3.1ms) | Total: 0.7% (3.1ms) | Samples: 1

**Called by:**
- `onConstructed` (1)

### `onwrite`
`internal:streams/writable:310` | Self: 0.6% (3.0ms) | Total: 0.6% (3.0ms) | Samples: 1

**Called by:**
- `bound onwrite` (1)

### `forEach`
`[native code]` | Self: 0.5% (2.5ms) | Total: 1.0% (4.7ms) | Samples: 2

**Called by:**
- `bound call` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)
- `(anonymous)` (1)

### `async acquire`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts:26` | Self: 0.5% (2.5ms) | Total: 29.4% (130.0ms) | Samples: 2

**Called by:**
- `async worker` (45)
- `async runBenchmark` (15)

**Calls:**
- `async acquire` (57)
- `async acquire` (1)

### `byteLength`
`[native code]` | Self: 0.5% (2.4ms) | Total: 0.5% (2.4ms) | Samples: 2

**Called by:**
- `toWritable` (2)

### `printStats`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` | Self: 0.5% (2.4ms) | Total: 0.5% (2.4ms) | Samples: 1

**Called by:**
- `async runBenchmark` (1)

### `doConnect`
`[native code]` | Self: 0.5% (2.3ms) | Total: 0.5% (2.3ms) | Samples: 1

**Called by:**
- `kConnectTcp` (1)

### `moduleDeclarationInstantiation`
`[native code]` | Self: 0.5% (2.3ms) | Total: 0.5% (2.3ms) | Samples: 2

**Called by:**
- `link` (2)

### `nextTick`
`[native code]` | Self: 0.5% (2.2ms) | Total: 0.7% (3.4ms) | Samples: 2

**Called by:**
- `maybeReadMore` (2)
- `construct` (1)

**Calls:**
- `setup` (1)

### `driveAsyncFunction`
`[native code]` | Self: 0.5% (2.2ms) | Total: 0.5% (2.2ms) | Samples: 2

**Called by:**
- `async acquire` (2)

### `convertBufferToString`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:24` | Self: 0.5% (2.2ms) | Total: 0.5% (2.2ms) | Samples: 1

**Called by:**
- `transformReply` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js` | Self: 0.5% (2.2ms) | Total: 0.5% (2.2ms) | Samples: 2

**Called by:**
- `(anonymous)` (1)
- `bound onceWrapper` (1)

### `writeOrBuffer`
`internal:streams/writable:282` | Self: 0.4% (2.1ms) | Total: 18.3% (81.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (38)

**Calls:**
- `_write` (31)
- `_write` (5)
- `_write` (1)

### `onEofChunk`
`internal:streams/readable` | Self: 0.4% (2.1ms) | Total: 0.4% (2.1ms) | Samples: 1

**Called by:**
- `readableAddChunkPushByteMode` (1)

### `async acquire`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:42` | Self: 0.4% (2.0ms) | Total: 0.4% (2.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `@lazy`
`[native code]` | Self: 0.4% (2.0ms) | Total: 0.4% (2.0ms) | Samples: 2

**Called by:**
- `node:crypto` (1)
- `node:fs/promises` (1)

### `onwrite`
`internal:streams/writable:327` | Self: 0.4% (2.0ms) | Total: 0.4% (2.0ms) | Samples: 2

**Called by:**
- `bound onwrite` (2)

### `read`
`node:net` | Self: 0.4% (1.9ms) | Total: 0.4% (1.9ms) | Samples: 1

**Called by:**
- `flow` (1)

### `newRegistryEntry`
`[native code]` | Self: 0.4% (1.8ms) | Total: 0.4% (1.8ms) | Samples: 1

**Called by:**
- `ensureRegistered` (1)

### `execute`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js:38` | Self: 0.4% (1.8ms) | Total: 0.4% (1.8ms) | Samples: 2

**Called by:**
- `async acquire` (2)

### `maybeReadMore`
`internal:streams/readable:399` | Self: 0.3% (1.3ms) | Total: 0.3% (1.3ms) | Samples: 1

**Called by:**
- `addChunk` (1)

### `ensure`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/buffer-writer.js` | Self: 0.3% (1.3ms) | Total: 0.3% (1.3ms) | Samples: 1

**Called by:**
- `addCString` (1)

### `handleSubscriberReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js` | Self: 0.3% (1.3ms) | Total: 0.3% (1.3ms) | Samples: 1

**Called by:**
- `returnReply` (1)

### `async acquire`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts` | Self: 0.2% (1.3ms) | Total: 0.2% (1.3ms) | Samples: 1

**Called by:**
- `async acquire` (1)

### `async (anonymous)`
`[native code]` | Self: 0.2% (1.2ms) | Total: 44.3% (195.6ms) | Samples: 1

**Called by:**
- `requestInstantiate` (3)
- `async (anonymous)` (3)
- `(anonymous)` (1)

**Calls:**
- `parseModule` (158)
- `requestFetch` (3)
- `async (anonymous)` (3)
- `resolve` (2)

### `newDetachedSocket`
`[native code]` | Self: 0.2% (1.2ms) | Total: 0.2% (1.2ms) | Samples: 1

**Called by:**
- `connect` (1)

### `ReadableState`
`internal:streams/readable` | Self: 0.2% (1.2ms) | Total: 0.2% (1.2ms) | Samples: 1

**Called by:**
- `Duplex` (1)

### `init`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/node.js` | Self: 0.2% (1.2ms) | Total: 0.2% (1.2ms) | Samples: 1

**Called by:**
- `createDebug` (1)

### `getStreamFuncs`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/stream.js` | Self: 0.2% (1.2ms) | Total: 0.2% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `writeOrBuffer`
`internal:streams/writable:271` | Self: 0.2% (1.2ms) | Total: 0.2% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `checkError`
`internal:streams/destroy` | Self: 0.2% (1.2ms) | Total: 0.2% (1.2ms) | Samples: 1

**Called by:**
- `destroy` (1)

### `reduce`
`[native code]` | Self: 0.2% (1.2ms) | Total: 0.2% (1.2ms) | Samples: 1

**Called by:**
- `getFlagMap` (1)

### `(anonymous)`
`internal:streams/writable` | Self: 0.2% (1.2ms) | Total: 0.2% (1.2ms) | Samples: 1

**Called by:**
- `endWritableNT` (1)

### `LazyTransform`
`internal:streams/lazy_transform` | Self: 0.2% (1.2ms) | Total: 0.2% (1.2ms) | Samples: 1

**Called by:**
- `Hash` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection-parameters.js:9` | Self: 0.2% (1.2ms) | Total: 0.2% (1.2ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `internal:stream`
`internal:stream:57` | Self: 0.2% (1.2ms) | Total: 0.2% (1.2ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `enable`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js` | Self: 0.2% (1.2ms) | Total: 0.2% (1.2ms) | Samples: 1

**Called by:**
- `setup` (1)

### `parse`
`node:url` | Self: 0.2% (1.2ms) | Total: 0.2% (1.2ms) | Samples: 1

**Called by:**
- `urlParse` (1)

### `transformReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:180` | Self: 0.2% (1.2ms) | Total: 0.2% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `execute`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js:47` | Self: 0.2% (1.2ms) | Total: 0.5% (2.3ms) | Samples: 1

**Called by:**
- `async acquire` (2)

**Calls:**
- `unshift` (1)

### `_write`
`node:net:890` | Self: 0.2% (1.2ms) | Total: 15.0% (66.2ms) | Samples: 1

**Called by:**
- `writeOrBuffer` (31)

**Calls:**
- `writeBuffered` (30)

### `maybeReadMore_`
`internal:streams/readable:403` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `processTicksAndRejections` (1)

### `onwrite`
`internal:streams/writable:324` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `bound onwrite` (1)

### `execute`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:494` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `slice`
`[native code]` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `parseArrayElements` (1)

### `internal:util/inspect`
`internal:util/inspect:9` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `test`
`[native code]` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `isIP` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `async acquire` (1)

### `WritableState`
`internal:streams/writable` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `Writable` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:334` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `unshift`
`[native code]` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `execute` (1)

### `async worker`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:84` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `(module)` (1)

### `async worker`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `async worker` (1)

### `bind`
`[native code]` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `internal:primordials` (1)

### `filter`
`[native code]` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `bound call` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/@ioredis/commands/built/index.js:16` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `forEach` (1)

### `async acquire`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts:31` | Self: 0.2% (1.1ms) | Total: 0.2% (1.1ms) | Samples: 1

**Called by:**
- `async acquire` (1)

### `checkFlag`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:77` | Self: 0.2% (1.0ms) | Total: 0.5% (2.3ms) | Samples: 1

**Called by:**
- `returnReply` (1)
- `getBlockingTimeoutInMs` (1)

**Calls:**
- `getFlagMap` (1)

### `lookup`
`[native code]` | Self: 0.2% (1.0ms) | Total: 0.2% (1.0ms) | Samples: 1

**Called by:**
- `lookup` (1)

### `_unrefTimer`
`node:net:836` | Self: 0.2% (1.0ms) | Total: 0.2% (1.0ms) | Samples: 1

**Called by:**
- `_write` (1)

### `apply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:38` | Self: 0.2% (1.0ms) | Total: 0.2% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`node:net` | Self: 0.2% (1.0ms) | Total: 0.2% (1.0ms) | Samples: 1

**Called by:**
- `bound onceWrapper` (1)

### `toWritable`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:112` | Self: 0.2% (1.0ms) | Total: 0.2% (1.0ms) | Samples: 1

**Called by:**
- `sendCommand` (1)

### `_read`
`node:net` | Self: 0.2% (1.0ms) | Total: 0.2% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `connect`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js` | Self: 0.2% (1.0ms) | Total: 0.2% (1.0ms) | Samples: 1

**Called by:**
- `Redis` (1)

### `bound require`
`[native code]` | Self: 0.2% (1.0ms) | Total: 100.0% (518.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (72)
- `(anonymous)` (51)
- `(anonymous)` (48)
- `(anonymous)` (23)
- `(anonymous)` (17)
- `(anonymous)` (12)
- `(anonymous)` (12)
- `(anonymous)` (11)
- `(anonymous)` (10)
- `(anonymous)` (9)
- `(anonymous)` (8)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `(anonymous)` (6)
- `(anonymous)` (6)
- `(anonymous)` (6)
- `(anonymous)` (6)
- `(anonymous)` (5)
- `(anonymous)` (5)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `setup` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

**Calls:**
- `require` (435)
- `anonymous` (27)

### `async worker`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:80` | Self: 0.2% (1.0ms) | Total: 0.2% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `createSafeIterator`
`internal:primordials:3` | Self: 0.2% (1.0ms) | Total: 0.2% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `set`
`[native code]` | Self: 0.2% (1.0ms) | Total: 0.2% (1.0ms) | Samples: 1

**Called by:**
- `require` (1)

### `data`
`node:net:281` | Self: 0.2% (1.0ms) | Total: 1.8% (7.9ms) | Samples: 1

**Calls:**
- `readableAddChunkPushByteMode` (4)

### `Redis`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:52` | Self: 0.2% (1.0ms) | Total: 0.7% (3.3ms) | Samples: 1

**Called by:**
- `RedisRateLimitRepository` (3)

**Calls:**
- `parseOptions` (2)

### `WriteStream`
`internal:fs/streams` | Self: 0.2% (996us) | Total: 0.2% (996us) | Samples: 1

**Called by:**
- `WriteStream` (1)

### `node:fs`
`node:fs:509` | Self: 0.2% (995us) | Total: 0.2% (995us) | Samples: 1

**Called by:**
- `parseModule` (1)

### `endBuffered`
`[native code]` | Self: 0.2% (975us) | Total: 0.2% (975us) | Samples: 1

**Called by:**
- `endNT` (1)

### `handleMonitorReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:151` | Self: 0.2% (939us) | Total: 0.2% (939us) | Samples: 1

**Called by:**
- `returnReply` (1)

### `prependListener`
`node:events` | Self: 0.2% (922us) | Total: 0.2% (922us) | Samples: 1

**Called by:**
- `DataHandler` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/@ioredis/commands/built/index.js:7` | Self: 0.0% (0us) | Total: 0.2% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `makeSafe`
`internal:primordials:30` | Self: 0.0% (0us) | Total: 0.5% (2.2ms) | Samples: 0

**Called by:**
- `internal:primordials` (1)
- `internal:primordials` (1)

**Calls:**
- `bound call` (2)

### `endWritableNT`
`internal:streams/readable:876` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:5` | Self: 0.0% (0us) | Total: 0.2% (995us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:3` | Self: 0.0% (0us) | Total: 0.8% (3.6ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `addChunk`
`internal:streams/readable:276` | Self: 0.0% (0us) | Total: 1.5% (6.9ms) | Samples: 0

**Called by:**
- `readableAddChunkPushByteMode` (4)

**Calls:**
- `maybeReadMore` (2)
- `maybeReadMore` (1)
- `maybeReadMore` (1)

### `setup`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js:287` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `enable` (1)

### `internal:primordials`
`internal:primordials:71` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `makeSafe` (1)

### `transformReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:178` | Self: 0.0% (0us) | Total: 2.5% (11.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (4)

**Calls:**
- `convertBufferToString` (2)
- `convertBufferToString` (1)
- `convertBufferToString` (1)

### `node:stream`
`node:stream:2` | Self: 0.0% (0us) | Total: 3.0% (13.5ms) | Samples: 0

**Called by:**
- `anonymous` (12)

**Calls:**
- `anonymous` (12)

### `requestSatisfyUtil`
`[native code]` | Self: 0.0% (0us) | Total: 0.8% (3.6ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)
- `requestSatisfy` (1)

**Calls:**
- `requestInstantiate` (3)

### `node:fs/promises`
`node:fs/promises:2` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `@lazy` (1)

### `urlParse`
`node:url:31` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `parseURL` (1)

**Calls:**
- `parse` (1)

### `requestSatisfy`
`[native code]` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `async loadModule` (1)

**Calls:**
- `requestSatisfyUtil` (1)

### `emit`
`node:events:95` | Self: 0.0% (0us) | Total: 4.5% (20.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (11)
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (11)
- `bound onceWrapper` (1)

### `kConnectTcp`
`node:net:356` | Self: 0.0% (0us) | Total: 0.5% (2.3ms) | Samples: 0

**Called by:**
- `internalConnectMultiple` (1)

**Calls:**
- `doConnect` (1)

### `bound onwrite`
`[native code]` | Self: 0.0% (0us) | Total: 2.6% (11.4ms) | Samples: 0

**Called by:**
- `_write` (5)

**Calls:**
- `onwrite` (2)
- `onwrite` (1)
- `onwrite` (1)
- `onwrite` (1)

### `node:events`
`node:events:9` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:52` | Self: 0.0% (0us) | Total: 0.2% (922us) | Samples: 0

**Called by:**
- `bound onceWrapper` (1)

**Calls:**
- `DataHandler` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/index.js:8` | Self: 0.0% (0us) | Total: 0.5% (2.5ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `internal:streams/compose`
`internal:streams/compose:2` | Self: 0.0% (0us) | Total: 1.8% (7.9ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `anonymous` (7)

### `(anonymous)`
`node:net:1470` | Self: 0.0% (0us) | Total: 0.9% (4.1ms) | Samples: 0

**Calls:**
- `emit` (2)
- `emit` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:4` | Self: 0.0% (0us) | Total: 5.5% (24.2ms) | Samples: 0

**Called by:**
- `anonymous` (23)

**Calls:**
- `bound require` (23)

### `internal:primordials`
`internal:primordials:50` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bind` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/ClusterSubscriberGroup.js:6` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `node:assert`
`node:assert:588` | Self: 0.0% (0us) | Total: 1.2% (5.4ms) | Samples: 0

**Called by:**
- `anonymous` (5)

**Calls:**
- `assign` (5)

### `execute`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:533` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `parseArrayElements` (1)

### `internal:streams/pipeline`
`internal:streams/pipeline:2` | Self: 0.0% (0us) | Total: 1.5% (6.9ms) | Samples: 0

**Called by:**
- `anonymous` (6)

**Calls:**
- `anonymous` (6)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/index.js:4` | Self: 0.0% (0us) | Total: 0.2% (915us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `createDebug`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js:143` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `genDebugFunction` (1)

**Calls:**
- `init` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/standard-as-callback/built/index.js:3` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `returnReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:51` | Self: 0.0% (0us) | Total: 0.2% (939us) | Samples: 0

**Called by:**
- `returnReply` (1)

**Calls:**
- `handleMonitorReply` (1)

### `evaluate`
`[native code]` | Self: 0.0% (0us) | Total: 2.0% (9.1ms) | Samples: 0

**Called by:**
- `moduleEvaluation` (8)

**Calls:**
- `(module)` (8)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:93` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:12` | Self: 0.0% (0us) | Total: 2.4% (10.7ms) | Samples: 0

**Called by:**
- `anonymous` (9)

**Calls:**
- `bound require` (9)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:2` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:282` | Self: 0.0% (0us) | Total: 0.7% (3.3ms) | Samples: 0

**Called by:**
- `Promise` (1)

**Calls:**
- `stringifyArguments` (1)

### `setup`
`[native code]` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `nextTick` (1)

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/debug.js:4` | Self: 0.0% (0us) | Total: 1.5% (6.9ms) | Samples: 0

**Called by:**
- `anonymous` (6)

**Calls:**
- `bound require` (6)

### `Promise`
`[native code]` | Self: 0.0% (0us) | Total: 0.7% (3.3ms) | Samples: 0

**Called by:**
- `initPromise` (1)

**Calls:**
- `(anonymous)` (1)

### `internal:streams/readable`
`internal:streams/readable:2` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `sendCommand`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:406` | Self: 0.0% (0us) | Total: 24.5% (108.4ms) | Samples: 0

**Called by:**
- `async acquire` (46)
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (41)
- `toWritable` (4)
- `toWritable` (1)
- `toWritable` (1)

### `(anonymous)`
`internal:streams/writable:197` | Self: 0.0% (0us) | Total: 0.7% (3.1ms) | Samples: 0

**Called by:**
- `bound onceWrapper` (1)

**Calls:**
- `onConstructed` (1)

### `(anonymous)`
`internal:streams/writable:248` | Self: 0.0% (0us) | Total: 21.0% (92.8ms) | Samples: 0

**Called by:**
- `sendCommand` (41)

**Calls:**
- `writeOrBuffer` (38)
- `_write` (2)
- `writeOrBuffer` (1)

### `WriteStream`
`internal:fs/streams:245` | Self: 0.0% (0us) | Total: 0.5% (2.2ms) | Samples: 0

**Called by:**
- `WriteStream` (2)

**Calls:**
- `Writable` (1)
- `Writable` (1)

### `onConstructed`
`internal:streams/writable:168` | Self: 0.0% (0us) | Total: 0.7% (3.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `clearBuffer` (1)

### `node:path`
`node:path:2` | Self: 0.0% (0us) | Total: 1.1% (5.2ms) | Samples: 0

**Called by:**
- `parseModule` (5)

**Calls:**
- `anonymous` (5)

### `Writable`
`internal:streams/writable:181` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `WriteStream` (1)

**Calls:**
- `WritableState` (1)

### `(anonymous)`
`internal:streams/readable:345` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `resume_` (1)

**Calls:**
- `_read` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:4` | Self: 0.0% (0us) | Total: 0.2% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `isIP`
`internal:net/isIP:14` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `lookupAndConnect` (1)

**Calls:**
- `test` (1)

### `Script`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js:12` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `defineCommand` (1)

**Calls:**
- `createHash` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Pipeline.js:9` | Self: 0.0% (0us) | Total: 0.8% (3.9ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `connect`
`node:net:628` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `newDetachedSocket` (1)

### `parseURL`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:239` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `parseOptions` (1)

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/util.js:5` | Self: 0.0% (0us) | Total: 0.9% (4.3ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `bound require` (4)

### `parseURL`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:205` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `parseOptions` (1)

**Calls:**
- `urlParse` (1)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:19` | Self: 0.0% (0us) | Total: 1.8% (8.0ms) | Samples: 0

**Called by:**
- `(module)` (7)

**Calls:**
- `async runBenchmark` (5)
- `async runBenchmark` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/stream.js:1` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `getStreamFuncs` (1)

### `linkAndEvaluateModule`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (2.3ms) | Samples: 0

**Called by:**
- `async loadAndEvaluateModule` (2)

**Calls:**
- `link` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:17` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `assign`
`[native code]` | Self: 0.0% (0us) | Total: 1.2% (5.4ms) | Samples: 0

**Called by:**
- `node:assert` (5)

**Calls:**
- `get` (5)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:10` | Self: 0.0% (0us) | Total: 1.7% (7.5ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `bound require` (7)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/index.js:4` | Self: 0.0% (0us) | Total: 0.6% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:3` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `internalConnectMultiple`
`node:net:1120` | Self: 0.0% (0us) | Total: 0.5% (2.3ms) | Samples: 0

**Called by:**
- `emitLookup` (1)

**Calls:**
- `kConnectTcp` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:5` | Self: 0.0% (0us) | Total: 0.7% (3.2ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:6` | Self: 0.0% (0us) | Total: 3.2% (14.2ms) | Samples: 0

**Called by:**
- `anonymous` (12)

**Calls:**
- `bound require` (12)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/defaults.js:82` | Self: 0.0% (0us) | Total: 2.5% (11.1ms) | Samples: 0

**Called by:**
- `anonymous` (11)

**Calls:**
- `bound require` (11)

### `Command`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:46` | Self: 0.0% (0us) | Total: 0.7% (3.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `initPromise` (1)

### `node:util`
`node:util:2` | Self: 0.0% (0us) | Total: 2.2% (10.1ms) | Samples: 0

**Called by:**
- `anonymous` (9)

**Calls:**
- `anonymous` (9)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:92` | Self: 0.0% (0us) | Total: 0.7% (3.3ms) | Samples: 0

**Called by:**
- `async close` (1)

**Calls:**
- `Command` (1)

### `(module)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:110` | Self: 0.0% (0us) | Total: 2.0% (9.1ms) | Samples: 0

**Called by:**
- `evaluate` (8)

**Calls:**
- `async runBenchmark` (7)
- `async runBenchmark` (1)

### `readableAddChunkPushByteMode`
`internal:streams/readable:242` | Self: 0.0% (0us) | Total: 1.5% (6.9ms) | Samples: 0

**Called by:**
- `data` (4)

**Calls:**
- `addChunk` (4)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection-parameters.js:7` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `resume_`
`internal:streams/readable:582` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `(anonymous)` (1)

### `_write`
`node:net:892` | Self: 0.0% (0us) | Total: 2.6% (11.4ms) | Samples: 0

**Called by:**
- `writeOrBuffer` (5)

**Calls:**
- `bound onwrite` (5)

### `open`
`node:net:265` | Self: 0.0% (0us) | Total: 0.7% (3.2ms) | Samples: 0

**Calls:**
- `bound afterConnectMultiple` (3)

### `DataHandler`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:25` | Self: 0.0% (0us) | Total: 0.2% (922us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `prependListener` (1)

### `onConstruct`
`internal:streams/destroy:144` | Self: 0.0% (0us) | Total: 0.7% (3.1ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `emit` (1)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:64` | Self: 0.0% (0us) | Total: 0.7% (3.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `async close` (1)

### `async acquire`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts:36` | Self: 0.0% (0us) | Total: 28.6% (126.4ms) | Samples: 0

**Called by:**
- `async acquire` (57)

**Calls:**
- `async acquire` (56)
- `async acquire` (1)

### `Hash`
`node:crypto:179` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `createHash` (1)

**Calls:**
- `LazyTransform` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:6` | Self: 0.0% (0us) | Total: 13.1% (57.9ms) | Samples: 0

**Called by:**
- `anonymous` (51)

**Calls:**
- `bound require` (51)

### `parseArrayElements`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:263` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `execute` (1)

**Calls:**
- `slice` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:61` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `forEach` (1)

### `Duplex`
`internal:streams/duplex:15` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `Socket` (1)

**Calls:**
- `ReadableState` (1)

### `node:crypto`
`node:crypto:55` | Self: 0.0% (0us) | Total: 0.2% (990us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `@lazy` (1)

### `readableAddChunkPushByteMode`
`internal:streams/readable:222` | Self: 0.0% (0us) | Total: 0.4% (2.1ms) | Samples: 0

**Called by:**
- `end` (1)

**Calls:**
- `onEofChunk` (1)

### `emitReadable_`
`internal:streams/readable:396` | Self: 0.0% (0us) | Total: 5.7% (25.5ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (13)

**Calls:**
- `flow` (13)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/index.js:6` | Self: 0.0% (0us) | Total: 0.7% (3.3ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:23` | Self: 0.0% (0us) | Total: 1.2% (5.5ms) | Samples: 0

**Called by:**
- `async runBenchmark` (5)

**Calls:**
- `RedisRateLimitRepository` (4)
- `RedisRateLimitRepository` (1)

### `async close`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:50` | Self: 0.0% (0us) | Total: 0.7% (3.3ms) | Samples: 0

**Called by:**
- `async close` (1)

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:721` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `tryCatcher` (1)

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/StandaloneConnector.js:6` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `parseOptions`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:621` | Self: 0.0% (0us) | Total: 0.5% (2.2ms) | Samples: 0

**Called by:**
- `Redis` (2)

**Calls:**
- `parseURL` (1)
- `parseURL` (1)

### `node:fs`
`node:fs:2` | Self: 0.0% (0us) | Total: 1.0% (4.8ms) | Samples: 0

**Called by:**
- `parseModule` (4)

**Calls:**
- `anonymous` (4)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:26` | Self: 0.0% (0us) | Total: 4.3% (19.2ms) | Samples: 0

**Called by:**
- `emit` (11)

**Calls:**
- `execute` (9)
- `execute` (1)
- `execute` (1)

### `sendCommand`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:344` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `async acquire` (1)

**Calls:**
- `getBlockingTimeoutInMs` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:6` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/query.js:5` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/@ioredis/commands/built/index.js:15` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `forEach` (1)

### `defineCommand`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:47` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `RedisRateLimitRepository` (1)

**Calls:**
- `Script` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/ClusterSubscriber.js:6` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `genDebugFunction` (1)

### `printStats`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:103` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `async runBenchmark` (1)

**Calls:**
- `log` (1)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:49` | Self: 0.0% (0us) | Total: 0.8% (3.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `printStats` (1)
- `printStats` (1)

### `setup`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js:14` | Self: 0.0% (0us) | Total: 0.2% (971us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `bound require` (1)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:46` | Self: 0.0% (0us) | Total: 0.5% (2.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `async runConcurrentRequests` (2)

### `returnReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:54` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `returnReply` (1)

**Calls:**
- `handleSubscriberReply` (1)

### `RedisRateLimitRepository`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:14` | Self: 0.0% (0us) | Total: 0.9% (4.3ms) | Samples: 0

**Called by:**
- `async runBenchmark` (4)

**Calls:**
- `Redis` (3)
- `Redis` (1)

### `createHash`
`node:crypto:201` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `Script` (1)

**Calls:**
- `Hash` (1)

### `(anonymous)`
`internal:primordials:38` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `forEach` (1)

**Calls:**
- `createSafeIterator` (1)

### `genDebugFunction`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/debug.js:54` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `createDebug` (1)

### `moduleEvaluation`
`[native code]` | Self: 0.0% (0us) | Total: 4.1% (18.3ms) | Samples: 0

**Called by:**
- `moduleEvaluation` (8)
- `async loadAndEvaluateModule` (8)

**Calls:**
- `evaluate` (8)
- `moduleEvaluation` (8)

### `emit`
`node:events:92` | Self: 0.0% (0us) | Total: 1.4% (6.3ms) | Samples: 0

**Called by:**
- `afterConnect` (3)
- `onConstruct` (1)

**Calls:**
- `bound onceWrapper` (4)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:21` | Self: 0.0% (0us) | Total: 0.6% (2.9ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/serializer.js:144` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `addCString` (1)

### `internal:streams/duplex`
`internal:streams/duplex:2` | Self: 0.0% (0us) | Total: 1.2% (5.7ms) | Samples: 0

**Called by:**
- `anonymous` (5)

**Calls:**
- `anonymous` (5)

### `createConnection`
`node:net:899` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `Socket` (1)

### `afterConnectMultiple`
`node:net:1173` | Self: 0.0% (0us) | Total: 0.7% (3.2ms) | Samples: 0

**Called by:**
- `bound afterConnectMultiple` (3)

**Calls:**
- `afterConnect` (3)

### `internal:stream`
`internal:stream:2` | Self: 0.0% (0us) | Total: 2.5% (11.0ms) | Samples: 0

**Called by:**
- `anonymous` (10)

**Calls:**
- `anonymous` (10)

### `requestFetch`
`[native code]` | Self: 0.0% (0us) | Total: 0.8% (3.6ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `fetch` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/node.js:240` | Self: 0.0% (0us) | Total: 0.7% (3.4ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `setup` (1)
- `setup` (1)
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/sasl.js:3` | Self: 0.0% (0us) | Total: 0.2% (992us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`internal:streams/readable:370` | Self: 0.0% (0us) | Total: 4.3% (19.2ms) | Samples: 0

**Called by:**
- `flow` (11)

**Calls:**
- `emit` (11)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/standard-as-callback/built/index.js:22` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `tryCatcher` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/postgres-interval/index.js:3` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:5` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/lodash.js:4` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `refresh`
`internal:util/colors:18` | Self: 0.0% (0us) | Total: 0.7% (3.2ms) | Samples: 0

**Called by:**
- `internal:util/colors` (3)

**Calls:**
- `(anonymous)` (3)

### `Redis`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:77` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `RedisRateLimitRepository` (1)

**Calls:**
- `connect` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:189` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `parseURL` (1)

**Calls:**
- `apply` (1)

### `bound call`
`[native code]` | Self: 0.0% (0us) | Total: 0.7% (3.3ms) | Samples: 0

**Called by:**
- `makeSafe` (2)
- `internal:util/inspect` (1)

**Calls:**
- `forEach` (2)
- `filter` (1)

### `RedisRateLimitRepository`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:17` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `async runBenchmark` (1)

**Calls:**
- `defineCommand` (1)

### `returnReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:74` | Self: 0.0% (0us) | Total: 3.0% (13.4ms) | Samples: 0

**Called by:**
- `returnReply` (6)

**Calls:**
- `(anonymous)` (6)

### `async loadAndEvaluateModule`
`[native code]` | Self: 0.0% (0us) | Total: 4.0% (18.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (10)
- `async loadAndEvaluateModule` (2)

**Calls:**
- `moduleEvaluation` (8)
- `async loadModule` (2)
- `async loadAndEvaluateModule` (2)
- `linkAndEvaluateModule` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection.js:6` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:8` | Self: 0.0% (0us) | Total: 0.9% (4.2ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `bound require` (4)

### `lookupAndConnect`
`node:net:924` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `connect` (1)

**Calls:**
- `isIP` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/index.js:4` | Self: 0.0% (0us) | Total: 18.5% (82.0ms) | Samples: 0

**Called by:**
- `parseModule` (72)

**Calls:**
- `bound require` (72)

### `(anonymous)`
`internal:streams/readable:354` | Self: 0.0% (0us) | Total: 1.0% (4.4ms) | Samples: 0

**Called by:**
- `flow` (1)

**Calls:**
- `fromList` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:12` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `afterConnect`
`node:net:1149` | Self: 0.0% (0us) | Total: 0.7% (3.2ms) | Samples: 0

**Called by:**
- `afterConnectMultiple` (3)

**Calls:**
- `emit` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:13` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `Socket`
`node:net:401` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `createConnection` (1)

**Calls:**
- `Duplex` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/index.js:3` | Self: 0.0% (0us) | Total: 0.4% (2.0ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/errors/index.js:4` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `loadAssertionError`
`node:assert:28` | Self: 0.0% (0us) | Total: 1.2% (5.4ms) | Samples: 0

**Called by:**
- `get` (5)

**Calls:**
- `anonymous` (5)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:11` | Self: 0.0% (0us) | Total: 1.9% (8.4ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `bound require` (7)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection-parameters.js:3` | Self: 0.0% (0us) | Total: 0.5% (2.4ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `flow`
`internal:streams/readable:594` | Self: 0.0% (0us) | Total: 5.7% (25.5ms) | Samples: 0

**Called by:**
- `emitReadable_` (13)

**Calls:**
- `(anonymous)` (11)
- `read` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:323` | Self: 0.0% (0us) | Total: 3.0% (13.4ms) | Samples: 0

**Called by:**
- `returnReply` (6)

**Calls:**
- `transformReply` (4)
- `(anonymous)` (1)
- `transformReply` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:1` | Self: 0.0% (0us) | Total: 0.2% (908us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `convertBufferToString`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:27` | Self: 0.0% (0us) | Total: 1.0% (4.4ms) | Samples: 0

**Called by:**
- `transformReply` (1)

**Calls:**
- `isArray` (1)

### `lookupAndConnectMultiple`
`node:net:971` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `lookupAndConnect` (1)

**Calls:**
- `lookup` (1)

### `(anonymous)`
`internal:streams/writable:596` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `finish` (1)

**Calls:**
- `destroy` (1)

### `async acquire`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:30` | Self: 0.0% (0us) | Total: 27.8% (122.8ms) | Samples: 0

**Called by:**
- `async acquire` (54)

**Calls:**
- `sendCommand` (46)
- `execute` (2)
- `execute` (2)
- `execute` (1)
- `sendCommand` (1)
- `(anonymous)` (1)
- `sendCommand` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/index.js:6` | Self: 0.0% (0us) | Total: 0.8% (3.8ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/node.js:32` | Self: 0.0% (0us) | Total: 0.5% (2.3ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:7` | Self: 0.0% (0us) | Total: 4.5% (19.9ms) | Samples: 0

**Called by:**
- `anonymous` (17)

**Calls:**
- `bound require` (17)

### `execute`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:544` | Self: 0.0% (0us) | Total: 3.8% (16.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (9)

**Calls:**
- `returnReply` (9)

### `returnReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:68` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `returnReply` (1)

**Calls:**
- `checkFlag` (1)

### `async worker`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:82` | Self: 0.0% (0us) | Total: 19.6% (86.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (44)
- `async worker` (1)

**Calls:**
- `async acquire` (45)

### `async runConcurrentRequests`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:91` | Self: 0.0% (0us) | Total: 0.5% (2.2ms) | Samples: 0

**Called by:**
- `async runConcurrentRequests` (2)

**Calls:**
- `async worker` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/supports-color/index.js:4` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `link`
`[native code]` | Self: 0.0% (0us) | Total: 1.5% (6.9ms) | Samples: 0

**Called by:**
- `link` (4)
- `linkAndEvaluateModule` (2)

**Calls:**
- `link` (4)
- `moduleDeclarationInstantiation` (2)

### `internal:assert/assertion_error`
`internal:assert/assertion_error:2` | Self: 0.0% (0us) | Total: 1.0% (4.5ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `anonymous` (4)

### `require`
`[native code]` | Self: 0.0% (0us) | Total: 100.0% (488.2ms) | Samples: 0

**Called by:**
- `bound require` (435)

**Calls:**
- `anonymous` (434)
- `set` (1)

### `internal:streams/operators`
`internal:streams/operators:2` | Self: 0.0% (0us) | Total: 2.2% (10.1ms) | Samples: 0

**Called by:**
- `anonymous` (9)

**Calls:**
- `anonymous` (9)

### `lookupAndConnect`
`node:net:945` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `connect` (1)

**Calls:**
- `lookupAndConnectMultiple` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:4` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `internal:shared`
`internal:shared:2` | Self: 0.0% (0us) | Total: 0.9% (4.2ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `anonymous` (4)

### `WriteStream`
`node:tty:42` | Self: 0.0% (0us) | Total: 0.7% (3.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)

**Calls:**
- `WriteStream` (2)
- `WriteStream` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/index.js:3` | Self: 0.0% (0us) | Total: 12.2% (54.1ms) | Samples: 0

**Called by:**
- `parseModule` (48)

**Calls:**
- `bound require` (48)

### `async close`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:49` | Self: 0.0% (0us) | Total: 0.7% (3.3ms) | Samples: 0

**Called by:**
- `async runBenchmark` (1)

**Calls:**
- `async close` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/utils.js:8` | Self: 0.0% (0us) | Total: 0.7% (3.1ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `maybeReadMore`
`internal:streams/readable:400` | Self: 0.0% (0us) | Total: 0.5% (2.2ms) | Samples: 0

**Called by:**
- `addChunk` (2)

**Calls:**
- `nextTick` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/index.js:9` | Self: 0.0% (0us) | Total: 1.5% (6.9ms) | Samples: 0

**Called by:**
- `anonymous` (6)

**Calls:**
- `bound require` (6)

### `internal:fs/streams`
`internal:fs/streams:2` | Self: 0.0% (0us) | Total: 3.0% (13.5ms) | Samples: 0

**Called by:**
- `anonymous` (12)

**Calls:**
- `anonymous` (12)

### `execute`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js:48` | Self: 0.0% (0us) | Total: 1.0% (4.7ms) | Samples: 0

**Called by:**
- `async acquire` (1)

**Calls:**
- `catch` (1)

### `destroy`
`internal:streams/destroy:32` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `checkError` (1)

### `addCString`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/buffer-writer.js:43` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `ensure` (1)

### `getBlockingTimeoutInMs`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:435` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `sendCommand` (1)

**Calls:**
- `checkFlag` (1)

### `internal:validators`
`internal:validators:2` | Self: 0.0% (0us) | Total: 0.9% (4.2ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `anonymous` (4)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/DelayQueue.js:4` | Self: 0.0% (0us) | Total: 0.5% (2.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/ConnectionPool.js:4` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `node:fs`
`node:fs:307` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `parseModule` (1)

**Calls:**
- `anonymous` (1)

### `endNT`
`node:net:5` | Self: 0.0% (0us) | Total: 0.2% (975us) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `endBuffered` (1)

### `internal:util/inspect`
`internal:util/inspect:179` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound call` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/lodash.js:6` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `convertBufferToString`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:33` | Self: 0.0% (0us) | Total: 1.0% (4.4ms) | Samples: 0

**Called by:**
- `transformReply` (2)

**Calls:**
- `toString` (2)

### `async worker`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:77` | Self: 0.0% (0us) | Total: 0.5% (2.2ms) | Samples: 0

**Called by:**
- `async runConcurrentRequests` (2)

**Calls:**
- `async worker` (1)
- `async worker` (1)

### `internal:util/inspect`
`internal:util/inspect:2` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `getFlagMap`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:87` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `checkFlag` (1)

**Calls:**
- `reduce` (1)

### `async acquire`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:25` | Self: 0.0% (0us) | Total: 28.3% (125.0ms) | Samples: 0

**Called by:**
- `async acquire` (56)

**Calls:**
- `async acquire` (54)
- `driveAsyncFunction` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/utils-webcrypto.js:1` | Self: 0.0% (0us) | Total: 0.4% (1.9ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `_write`
`node:net:889` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `writeOrBuffer` (1)

**Calls:**
- `_unrefTimer` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:4` | Self: 0.0% (0us) | Total: 0.4% (2.1ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:10` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `apply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:34` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `finish`
`internal:streams/writable:478` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:5` | Self: 0.0% (0us) | Total: 1.9% (8.4ms) | Samples: 0

**Called by:**
- `anonymous` (8)

**Calls:**
- `bound require` (8)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/index.js:4` | Self: 0.0% (0us) | Total: 0.2% (974us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `internal:primordials`
`internal:primordials:78` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `makeSafe` (1)

### `tryCatcher`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/standard-as-callback/built/utils.js:12` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/transaction.js:6` | Self: 0.0% (0us) | Total: 1.6% (7.4ms) | Samples: 0

**Called by:**
- `anonymous` (6)

**Calls:**
- `bound require` (6)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:16` | Self: 0.0% (0us) | Total: 1.7% (7.7ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `bound require` (7)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:9` | Self: 0.0% (0us) | Total: 1.3% (5.7ms) | Samples: 0

**Called by:**
- `anonymous` (5)

**Calls:**
- `bound require` (5)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:6` | Self: 0.0% (0us) | Total: 1.4% (6.5ms) | Samples: 0

**Called by:**
- `anonymous` (6)

**Calls:**
- `bound require` (6)

### `requestInstantiate`
`[native code]` | Self: 0.0% (0us) | Total: 0.8% (3.6ms) | Samples: 0

**Called by:**
- `requestSatisfyUtil` (3)

**Calls:**
- `async (anonymous)` (3)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:42` | Self: 0.0% (0us) | Total: 1.8% (8.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `log` (1)

### `(anonymous)`
`node:dns:200` | Self: 0.0% (0us) | Total: 0.5% (2.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `emitLookup` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:10` | Self: 0.0% (0us) | Total: 1.8% (8.2ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `bound require` (7)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/index.js:2` | Self: 0.0% (0us) | Total: 0.4% (2.0ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/SentinelConnector/index.js:11` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:8` | Self: 0.0% (0us) | Total: 1.6% (7.1ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `bound require` (7)

### `returnReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:21` | Self: 0.0% (0us) | Total: 3.8% (16.8ms) | Samples: 0

**Called by:**
- `execute` (9)

**Calls:**
- `returnReply` (6)
- `returnReply` (1)
- `returnReply` (1)
- `returnReply` (1)

### `async runConcurrentRequests`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:69` | Self: 0.0% (0us) | Total: 0.5% (2.2ms) | Samples: 0

**Called by:**
- `async runBenchmark` (2)

**Calls:**
- `async runConcurrentRequests` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/index.js:1` | Self: 0.0% (0us) | Total: 1.6% (7.1ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `bound require` (7)

### `get ReadStream`
`node:fs:578` | Self: 0.0% (0us) | Total: 3.3% (14.7ms) | Samples: 0

**Called by:**
- `parseModule` (13)

**Calls:**
- `anonymous` (13)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/index.js:8` | Self: 0.0% (0us) | Total: 0.5% (2.5ms) | Samples: 0

**Called by:**
- `parseModule` (2)

**Calls:**
- `bound require` (2)

### `Writable`
`internal:streams/writable:196` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `WriteStream` (1)

**Calls:**
- `construct` (1)

### `bound onceWrapper`
`[native code]` | Self: 0.0% (0us) | Total: 1.6% (7.2ms) | Samples: 0

**Called by:**
- `emit` (4)
- `emit` (1)

**Calls:**
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:7` | Self: 0.0% (0us) | Total: 0.8% (3.6ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `internal:util/colors`
`internal:util/colors:24` | Self: 0.0% (0us) | Total: 0.7% (3.2ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `refresh` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/sasl.js:2` | Self: 0.0% (0us) | Total: 0.7% (3.1ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/ClusterSubscriber.js:3` | Self: 0.0% (0us) | Total: 1.1% (5.2ms) | Samples: 0

**Called by:**
- `anonymous` (5)

**Calls:**
- `bound require` (5)

### `initPromise`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:275` | Self: 0.0% (0us) | Total: 0.7% (3.3ms) | Samples: 0

**Called by:**
- `Command` (1)

**Calls:**
- `Promise` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/utils.js:5` | Self: 0.0% (0us) | Total: 2.5% (11.0ms) | Samples: 0

**Called by:**
- `anonymous` (10)

**Calls:**
- `bound require` (10)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-errors/index.js:3` | Self: 0.0% (0us) | Total: 1.6% (7.4ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `bound require` (7)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:10` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `lookup`
`node:dns:194` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `lookupAndConnectMultiple` (1)

**Calls:**
- `lookup` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/utils.js:3` | Self: 0.0% (0us) | Total: 2.7% (12.3ms) | Samples: 0

**Called by:**
- `anonymous` (12)

**Calls:**
- `bound require` (12)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:18` | Self: 0.0% (0us) | Total: 0.5% (2.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/StandaloneConnector.js:54` | Self: 0.0% (0us) | Total: 1.0% (4.8ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (4)

**Calls:**
- `connect` (2)
- `createConnection` (1)
- `connect` (1)

### `ensureRegistered`
`[native code]` | Self: 0.0% (0us) | Total: 0.4% (1.8ms) | Samples: 0

**Called by:**
- `async loadModule` (1)

**Calls:**
- `newRegistryEntry` (1)

### `construct`
`internal:streams/destroy:124` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `Writable` (1)

**Calls:**
- `nextTick` (1)

### `async loadModule`
`[native code]` | Self: 0.0% (0us) | Total: 1.4% (6.5ms) | Samples: 0

**Called by:**
- `async loadModule` (2)
- `async loadAndEvaluateModule` (2)

**Calls:**
- `async loadModule` (2)
- `ensureRegistered` (1)
- `requestSatisfy` (1)

### `end`
`node:net:300` | Self: 0.0% (0us) | Total: 0.4% (2.1ms) | Samples: 0

**Calls:**
- `readableAddChunkPushByteMode` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/StandaloneConnector.js:4` | Self: 0.0% (0us) | Total: 0.4% (1.8ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection.js:5` | Self: 0.0% (0us) | Total: 1.8% (8.3ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `bound require` (7)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:638` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `apply` (1)

**Calls:**
- `apply` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-errors/lib/modern.js:3` | Self: 0.0% (0us) | Total: 1.6% (7.4ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `bound require` (7)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:70` | Self: 0.0% (0us) | Total: 0.2% (1.2ms) | Samples: 0

**Called by:**
- `bound onceWrapper` (1)

**Calls:**
- `sendCommand` (1)

### `emitLookup`
`node:net:1022` | Self: 0.0% (0us) | Total: 0.5% (2.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `internalConnectMultiple` (1)

### `connect`
`node:net:630` | Self: 0.0% (0us) | Total: 0.5% (2.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `lookupAndConnect` (1)
- `lookupAndConnect` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Pipeline.js:7` | Self: 0.0% (0us) | Total: 0.2% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `get`
`node:assert:70` | Self: 0.0% (0us) | Total: 1.2% (5.4ms) | Samples: 0

**Called by:**
- `assign` (5)

**Calls:**
- `loadAssertionError` (5)

### `bound afterConnectMultiple`
`[native code]` | Self: 0.0% (0us) | Total: 0.7% (3.2ms) | Samples: 0

**Called by:**
- `open` (3)

**Calls:**
- `afterConnectMultiple` (3)

## Files

| Self% | Self | File |
|------:|-----:|------|
| 68.9% | 304.5ms | `[native code]` |
| 7.0% | 31.0ms | `internal:streams/writable` |
| 4.5% | 19.9ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js` |
| 3.9% | 17.3ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` |
| 3.1% | 13.7ms | `internal:streams/readable` |
| 1.6% | 7.3ms | `node:net` |
| 1.4% | 6.3ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js` |
| 0.9% | 4.1ms | `node:events` |
| 0.8% | 3.6ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts` |
| 0.7% | 3.3ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts` |
| 0.6% | 3.0ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js` |
| 0.5% | 2.2ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js` |
| 0.5% | 2.2ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js` |
| 0.5% | 2.2ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js` |
| 0.3% | 1.3ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/buffer-writer.js` |
| 0.2% | 1.2ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/node.js` |
| 0.2% | 1.2ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/stream.js` |
| 0.2% | 1.2ms | `internal:streams/destroy` |
| 0.2% | 1.2ms | `internal:streams/lazy_transform` |
| 0.2% | 1.2ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection-parameters.js` |
| 0.2% | 1.2ms | `internal:stream` |
| 0.2% | 1.2ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js` |
| 0.2% | 1.2ms | `node:url` |
| 0.2% | 1.1ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js` |
| 0.2% | 1.1ms | `internal:util/inspect` |
| 0.2% | 1.1ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js` |
| 0.2% | 1.1ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/@ioredis/commands/built/index.js` |
| 0.2% | 1.0ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js` |
| 0.2% | 1.0ms | `internal:primordials` |
| 0.2% | 996us | `internal:fs/streams` |
| 0.2% | 995us | `node:fs` |
