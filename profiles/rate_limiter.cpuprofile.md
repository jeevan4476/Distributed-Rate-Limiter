# CPU Profile

| Duration | Samples | Interval | Functions |
|----------|---------|----------|----------|
| 334.9ms | 217 | 1.0ms | 319 |

**Top 10:** `anonymous` 31.3%, `writeBuffered` 10.3%, `CustomScriptCommand` 5.3%, `(anonymous)` 3.8%, `bound onwrite` 3.5%, `parseModule` 3.0%, `howMuchToRead` 2.6%, `toWritable` 2.1%, `onwrite` 1.6%, `toString` 1.2%

## Hot Functions (Self Time)

| Self% | Self | Total% | Total | Function | Location |
|------:|-----:|-------:|------:|----------|----------|
| 31.3% | 105.0ms | 100.0% | 474.4ms | `anonymous` | `[native code]` |
| 10.3% | 34.5ms | 10.3% | 34.5ms | `writeBuffered` | `[native code]` |
| 5.3% | 18.0ms | 6.9% | 23.2ms | `CustomScriptCommand` | `[native code]` |
| 3.8% | 12.8ms | 3.8% | 12.8ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js` |
| 3.5% | 11.8ms | 5.1% | 17.2ms | `bound onwrite` | `[native code]` |
| 3.0% | 10.3ms | 39.5% | 132.3ms | `parseModule` | `[native code]` |
| 2.6% | 8.9ms | 2.6% | 8.9ms | `howMuchToRead` | `internal:streams/readable:307` |
| 2.1% | 7.0ms | 2.1% | 7.0ms | `toWritable` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:117` |
| 1.6% | 5.4ms | 1.6% | 5.4ms | `onwrite` | `internal:streams/writable:320` |
| 1.2% | 4.1ms | 1.2% | 4.1ms | `toString` | `[native code]` |
| 1.1% | 4.0ms | 1.1% | 4.0ms | `maybeReadMore_` | `internal:streams/readable` |
| 1.1% | 3.8ms | 42.7% | 143.1ms | `(anonymous)` | `[native code]` |
| 1.0% | 3.5ms | 1.0% | 3.5ms | `byteLength` | `[native code]` |
| 1.0% | 3.4ms | 1.3% | 4.6ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:92` |
| 1.0% | 3.3ms | 1.0% | 3.3ms | `fetch` | `[native code]` |
| 0.9% | 3.3ms | 7.9% | 26.5ms | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js:47` |
| 0.8% | 3.0ms | 31.8% | 106.6ms | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:25` |
| 0.8% | 2.8ms | 0.8% | 2.8ms | `set` | `[native code]` |
| 0.7% | 2.4ms | 0.7% | 2.4ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:714` |
| 0.7% | 2.4ms | 1.4% | 4.7ms | `sendCommand` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:394` |
| 0.6% | 2.3ms | 0.6% | 2.3ms | `async worker` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:78` |
| 0.6% | 2.3ms | 0.6% | 2.3ms | `get` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js` |
| 0.6% | 2.1ms | 0.6% | 2.1ms | `internalConnectMultiple` | `node:net` |
| 0.6% | 2.1ms | 0.6% | 2.1ms | `sendCommand` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:408` |
| 0.6% | 2.1ms | 0.6% | 2.1ms | `moduleDeclarationInstantiation` | `[native code]` |
| 0.6% | 2.0ms | 0.6% | 2.0ms | `handleMonitorReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:151` |
| 0.6% | 2.0ms | 0.6% | 2.0ms | `unshift` | `[native code]` |
| 0.6% | 2.0ms | 0.6% | 2.0ms | `readableAddChunkPushByteMode` | `internal:streams/readable` |
| 0.6% | 2.0ms | 0.6% | 2.0ms | `howMuchToRead` | `internal:streams/readable:306` |
| 0.6% | 2.0ms | 0.6% | 2.0ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:46` |
| 0.5% | 1.7ms | 1.7% | 5.7ms | `async loadModule` | `[native code]` |
| 0.4% | 1.3ms | 0.4% | 1.3ms | `Socket` | `node:net` |
| 0.3% | 1.3ms | 0.3% | 1.3ms | `lazyCpus` | `node:os` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `shouldUseAutoPipelining` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/autoPipelining.js` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `sendCommand` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:344` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `generateFunction` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/buffer-writer.js:12` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `reduce` | `[native code]` |
| 0.3% | 1.2ms | 0.6% | 2.2ms | `Command` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:44` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `clearBuffer` | `internal:streams/writable` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `validateFlagsOption` | `node:dns` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `removeListener` | `node:events:227` |
| 0.3% | 1.2ms | 1.0% | 3.3ms | `refresh` | `internal:util/colors:18` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `_final` | `node:net` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `_write` | `internal:streams/writable` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `Writable` | `internal:streams/writable` |
| 0.3% | 1.1ms | 1.2% | 4.1ms | `Promise` | `[native code]` |
| 0.3% | 1.1ms | 100.0% | 353.1ms | `require` | `[native code]` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `node:crypto` | `node:crypto:108` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `_destroy` | `node:net` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `end` | `node:net:299` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `(anonymous)` | `internal:streams/readable:315` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `async worker` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `connect` | `node:net` |
| 0.3% | 1.1ms | 1.3% | 4.5ms | `assign` | `[native code]` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `printStats` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `slice` | `[native code]` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `copyObject` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:213` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `isIPv6` | `internal:net/isIP` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `_write` | `node:net:885` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `parse` | `node:url` |
| 0.3% | 1.0ms | 43.3% | 145.0ms | `async (anonymous)` | `[native code]` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `isCloudflareRuntime` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/stream.js` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:26` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `RegExp` | `[native code]` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:531` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `toArg` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `sendCommand` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:329` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `(anonymous)` | `internal:primordials` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `resolve` | `[native code]` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `stringifyArguments` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:164` |
| 0.2% | 996us | 0.2% | 996us | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts` |
| 0.2% | 989us | 0.2% | 989us | `stringifyArguments` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js` |
| 0.2% | 986us | 0.2% | 986us | `internal:validators` | `internal:validators:67` |
| 0.2% | 979us | 0.2% | 979us | `split` | `[native code]` |
| 0.2% | 975us | 0.2% | 975us | `checkFlag` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:77` |
| 0.2% | 970us | 0.2% | 970us | `flat` | `[native code]` |
| 0.2% | 965us | 0.2% | 965us | `URL` | `[native code]` |
| 0.2% | 952us | 51.9% | 174.0ms | `processTicksAndRejections` | `[native code]` |
| 0.2% | 921us | 0.5% | 1.8ms | `readFileSync` | `[native code]` |
| 0.2% | 911us | 0.2% | 911us | `(anonymous)` | `internal:util/inspect` |
| 0.2% | 901us | 0.2% | 901us | `howMuchToRead` | `internal:streams/readable` |
| 0.2% | 898us | 0.2% | 898us | `transformReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:180` |
| 0.2% | 893us | 0.2% | 893us | `promiseEmptyOnFulfilled` | `[native code]` |
| 0.2% | 892us | 0.2% | 892us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:102` |

## Call Tree (Total Time)

| Total% | Total | Self% | Self | Function | Location |
|-------:|------:|------:|-----:|----------|----------|
| 100.0% | 474.4ms | 31.3% | 105.0ms | `anonymous` | `[native code]` |
| 100.0% | 377.7ms | 0.0% | 0us | `bound require` | `[native code]` |
| 100.0% | 353.1ms | 0.3% | 1.1ms | `require` | `[native code]` |
| 51.9% | 174.0ms | 0.2% | 952us | `processTicksAndRejections` | `[native code]` |
| 43.3% | 145.0ms | 0.3% | 1.0ms | `async (anonymous)` | `[native code]` |
| 42.7% | 143.1ms | 1.1% | 3.8ms | `(anonymous)` | `[native code]` |
| 39.5% | 132.3ms | 3.0% | 10.3ms | `parseModule` | `[native code]` |
| 32.1% | 107.6ms | 0.0% | 0us | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts:26` |
| 31.8% | 106.6ms | 0.8% | 3.0ms | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:25` |
| 31.8% | 106.6ms | 0.0% | 0us | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts:36` |
| 30.9% | 103.6ms | 0.0% | 0us | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:30` |
| 19.3% | 64.7ms | 0.0% | 0us | `sendCommand` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:406` |
| 18.3% | 61.5ms | 0.0% | 0us | `async worker` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:82` |
| 17.4% | 58.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/index.js:4` |
| 16.1% | 54.0ms | 0.0% | 0us | `(anonymous)` | `internal:streams/writable:248` |
| 15.7% | 52.8ms | 0.0% | 0us | `writeOrBuffer` | `internal:streams/writable:282` |
| 14.3% | 48.1ms | 0.0% | 0us | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:37` |
| 12.3% | 41.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/index.js:3` |
| 11.5% | 38.5ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:6` |
| 10.3% | 34.5ms | 0.0% | 0us | `_write` | `node:net:890` |
| 10.3% | 34.5ms | 10.3% | 34.5ms | `writeBuffered` | `[native code]` |
| 7.9% | 26.5ms | 0.9% | 3.3ms | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js:47` |
| 7.0% | 23.4ms | 0.0% | 0us | `flow` | `internal:streams/readable:594` |
| 7.0% | 23.4ms | 0.0% | 0us | `emitReadable_` | `internal:streams/readable:396` |
| 6.9% | 23.2ms | 5.3% | 18.0ms | `CustomScriptCommand` | `[native code]` |
| 5.6% | 18.9ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:4` |
| 5.1% | 17.2ms | 0.0% | 0us | `_write` | `node:net:892` |
| 5.1% | 17.2ms | 3.5% | 11.8ms | `bound onwrite` | `[native code]` |
| 4.9% | 16.4ms | 0.0% | 0us | `bound onceWrapper` | `[native code]` |
| 4.9% | 16.4ms | 0.0% | 0us | `emit` | `node:events:92` |
| 4.5% | 15.2ms | 0.0% | 0us | `bound afterConnectMultiple` | `[native code]` |
| 4.5% | 15.2ms | 0.0% | 0us | `afterConnectMultiple` | `node:net:1173` |
| 4.5% | 15.2ms | 0.0% | 0us | `open` | `node:net:265` |
| 4.5% | 15.2ms | 0.0% | 0us | `afterConnect` | `node:net:1149` |
| 4.4% | 14.9ms | 0.0% | 0us | `async loadAndEvaluateModule` | `[native code]` |
| 4.2% | 14.1ms | 0.0% | 0us | `moduleEvaluation` | `[native code]` |
| 3.8% | 12.9ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:7` |
| 3.8% | 12.8ms | 3.8% | 12.8ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js` |
| 3.5% | 11.9ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:331` |
| 3.3% | 11.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:26` |
| 3.3% | 11.2ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:370` |
| 3.3% | 11.2ms | 0.0% | 0us | `emit` | `node:events:95` |
| 3.1% | 10.5ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:6` |
| 3.0% | 10.1ms | 0.0% | 0us | `get ReadStream` | `node:fs:578` |
| 2.7% | 9.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/utils.js:3` |
| 2.6% | 8.9ms | 2.6% | 8.9ms | `howMuchToRead` | `internal:streams/readable:307` |
| 2.6% | 8.8ms | 0.0% | 0us | `internal:stream` | `internal:stream:2` |
| 2.6% | 8.8ms | 0.0% | 0us | `internal:fs/streams` | `internal:fs/streams:2` |
| 2.6% | 8.8ms | 0.0% | 0us | `node:stream` | `node:stream:2` |
| 2.6% | 8.8ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/utils.js:5` |
| 2.4% | 8.1ms | 0.0% | 0us | `returnReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:21` |
| 2.4% | 8.1ms | 0.0% | 0us | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:544` |
| 2.3% | 7.9ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:12` |
| 2.3% | 7.8ms | 0.0% | 0us | `node:util` | `node:util:2` |
| 2.3% | 7.8ms | 0.0% | 0us | `internal:streams/operators` | `internal:streams/operators:2` |
| 2.3% | 7.7ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/defaults.js:82` |
| 2.1% | 7.0ms | 0.0% | 0us | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:19` |
| 2.1% | 7.0ms | 0.0% | 0us | `(module)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:110` |
| 2.1% | 7.0ms | 0.0% | 0us | `evaluate` | `[native code]` |
| 2.1% | 7.0ms | 2.1% | 7.0ms | `toWritable` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:117` |
| 2.0% | 6.9ms | 0.0% | 0us | `internal:streams/compose` | `internal:streams/compose:2` |
| 1.9% | 6.6ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:5` |
| 1.9% | 6.6ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-errors/index.js:3` |
| 1.9% | 6.5ms | 0.0% | 0us | `link` | `[native code]` |
| 1.8% | 6.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:10` |
| 1.8% | 6.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:8` |
| 1.8% | 6.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:10` |
| 1.7% | 5.8ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection.js:5` |
| 1.7% | 5.7ms | 0.5% | 1.7ms | `async loadModule` | `[native code]` |
| 1.6% | 5.5ms | 0.0% | 0us | `internal:streams/pipeline` | `internal:streams/pipeline:2` |
| 1.6% | 5.5ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/index.js:1` |
| 1.6% | 5.5ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-errors/lib/modern.js:3` |
| 1.6% | 5.4ms | 1.6% | 5.4ms | `onwrite` | `internal:streams/writable:320` |
| 1.5% | 5.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:323` |
| 1.5% | 5.0ms | 0.0% | 0us | `returnReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:74` |
| 1.4% | 4.7ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/index.js:9` |
| 1.4% | 4.7ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/debug.js:4` |
| 1.4% | 4.7ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/StandaloneConnector.js:54` |
| 1.4% | 4.7ms | 0.7% | 2.4ms | `sendCommand` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:394` |
| 1.3% | 4.6ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:11` |
| 1.3% | 4.6ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/transaction.js:6` |
| 1.3% | 4.6ms | 1.0% | 3.4ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:92` |
| 1.3% | 4.5ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:6` |
| 1.3% | 4.5ms | 0.0% | 0us | `node:assert` | `node:assert:588` |
| 1.3% | 4.5ms | 0.3% | 1.1ms | `assign` | `[native code]` |
| 1.3% | 4.4ms | 0.0% | 0us | `node:fs` | `node:fs:2` |
| 1.3% | 4.4ms | 0.0% | 0us | `requestInstantiate` | `[native code]` |
| 1.3% | 4.4ms | 0.0% | 0us | `requestSatisfyUtil` | `[native code]` |
| 1.2% | 4.3ms | 0.0% | 0us | `internal:streams/duplex` | `internal:streams/duplex:2` |
| 1.2% | 4.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:16` |
| 1.2% | 4.1ms | 0.3% | 1.1ms | `Promise` | `[native code]` |
| 1.2% | 4.1ms | 0.0% | 0us | `initPromise` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:275` |
| 1.2% | 4.1ms | 0.0% | 0us | `Command` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:46` |
| 1.2% | 4.1ms | 0.0% | 0us | `convertBufferToString` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:33` |
| 1.2% | 4.1ms | 1.2% | 4.1ms | `toString` | `[native code]` |
| 1.2% | 4.1ms | 0.0% | 0us | `transformReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:178` |
| 1.2% | 4.1ms | 0.0% | 0us | `node:path` | `node:path:2` |
| 1.2% | 4.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:8` |
| 1.2% | 4.0ms | 0.0% | 0us | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:23` |
| 1.1% | 4.0ms | 1.1% | 4.0ms | `maybeReadMore_` | `internal:streams/readable` |
| 1.1% | 3.9ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:9` |
| 1.0% | 3.5ms | 1.0% | 3.5ms | `byteLength` | `[native code]` |
| 1.0% | 3.5ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/standard-as-callback/built/index.js:22` |
| 1.0% | 3.5ms | 0.0% | 0us | `tryCatcher` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/standard-as-callback/built/utils.js:12` |
| 1.0% | 3.5ms | 0.0% | 0us | `forEach` | `[native code]` |
| 1.0% | 3.4ms | 0.0% | 0us | `async close` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:49` |
| 1.0% | 3.4ms | 0.0% | 0us | `async close` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:50` |
| 1.0% | 3.4ms | 0.0% | 0us | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:64` |
| 1.0% | 3.3ms | 0.0% | 0us | `internal:assert/assertion_error` | `internal:assert/assertion_error:2` |
| 1.0% | 3.3ms | 0.0% | 0us | `internal:util/colors` | `internal:util/colors:24` |
| 1.0% | 3.3ms | 0.0% | 0us | `get` | `node:assert:70` |
| 1.0% | 3.3ms | 0.3% | 1.2ms | `refresh` | `internal:util/colors:18` |
| 1.0% | 3.3ms | 0.0% | 0us | `loadAssertionError` | `node:assert:28` |
| 1.0% | 3.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/sasl.js:2` |
| 1.0% | 3.3ms | 0.0% | 0us | `requestFetch` | `[native code]` |
| 1.0% | 3.3ms | 1.0% | 3.3ms | `fetch` | `[native code]` |
| 0.9% | 3.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/util.js:5` |
| 0.9% | 3.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/ClusterSubscriber.js:3` |
| 0.9% | 3.2ms | 0.0% | 0us | `async runConcurrentRequests` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:91` |
| 0.9% | 3.2ms | 0.0% | 0us | `async worker` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:77` |
| 0.9% | 3.2ms | 0.0% | 0us | `async runConcurrentRequests` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:69` |
| 0.9% | 3.1ms | 0.0% | 0us | `internal:validators` | `internal:validators:2` |
| 0.9% | 3.1ms | 0.0% | 0us | `RedisRateLimitRepository` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:14` |
| 0.9% | 3.1ms | 0.0% | 0us | `Redis` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:52` |
| 0.9% | 3.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/index.js:6` |
| 0.8% | 3.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:282` |
| 0.8% | 2.8ms | 0.8% | 2.8ms | `set` | `[native code]` |
| 0.8% | 2.8ms | 0.0% | 0us | `ensureRegistered` | `[native code]` |
| 0.7% | 2.4ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/index.js:6` |
| 0.7% | 2.4ms | 0.7% | 2.4ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:714` |
| 0.7% | 2.4ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/utils.js:8` |
| 0.7% | 2.4ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/utils-webcrypto.js:1` |
| 0.7% | 2.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Pipeline.js:9` |
| 0.7% | 2.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:10` |
| 0.6% | 2.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/index.js:8` |
| 0.6% | 2.3ms | 0.6% | 2.3ms | `async worker` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:78` |
| 0.6% | 2.3ms | 0.0% | 0us | `connect` | `node:net:630` |
| 0.6% | 2.3ms | 0.6% | 2.3ms | `get` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js` |
| 0.6% | 2.3ms | 0.0% | 0us | `get` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/debug.js:76` |
| 0.6% | 2.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:3` |
| 0.6% | 2.2ms | 0.0% | 0us | `toWritable` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:150` |
| 0.6% | 2.2ms | 0.0% | 0us | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:46` |
| 0.6% | 2.2ms | 0.3% | 1.2ms | `Command` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:44` |
| 0.6% | 2.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/index.js:8` |
| 0.6% | 2.1ms | 0.6% | 2.1ms | `internalConnectMultiple` | `node:net` |
| 0.6% | 2.1ms | 0.0% | 0us | `(anonymous)` | `node:dns:200` |
| 0.6% | 2.1ms | 0.0% | 0us | `emitLookup` | `node:net:1022` |
| 0.6% | 2.1ms | 0.0% | 0us | `WriteStream` | `internal:fs/streams:245` |
| 0.6% | 2.1ms | 0.0% | 0us | `WriteStream` | `node:tty:42` |
| 0.6% | 2.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:189` |
| 0.6% | 2.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/node.js:240` |
| 0.6% | 2.1ms | 0.6% | 2.1ms | `sendCommand` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:408` |
| 0.6% | 2.1ms | 0.6% | 2.1ms | `moduleDeclarationInstantiation` | `[native code]` |
| 0.6% | 2.1ms | 0.0% | 0us | `linkAndEvaluateModule` | `[native code]` |
| 0.6% | 2.1ms | 0.0% | 0us | `internal:shared` | `internal:shared:2` |
| 0.6% | 2.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:5` |
| 0.6% | 2.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/index.js:3` |
| 0.6% | 2.0ms | 0.0% | 0us | `returnReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:51` |
| 0.6% | 2.0ms | 0.0% | 0us | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js:39` |
| 0.6% | 2.0ms | 0.6% | 2.0ms | `unshift` | `[native code]` |
| 0.6% | 2.0ms | 0.6% | 2.0ms | `handleMonitorReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:151` |
| 0.6% | 2.0ms | 0.6% | 2.0ms | `readableAddChunkPushByteMode` | `internal:streams/readable` |
| 0.6% | 2.0ms | 0.0% | 0us | `data` | `node:net:281` |
| 0.6% | 2.0ms | 0.6% | 2.0ms | `howMuchToRead` | `internal:streams/readable:306` |
| 0.6% | 2.0ms | 0.6% | 2.0ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:46` |
| 0.6% | 2.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/StandaloneConnector.js:4` |
| 0.6% | 2.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/index.js:4` |
| 0.6% | 2.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:21` |
| 0.6% | 2.0ms | 0.0% | 0us | `urlParse` | `node:url:31` |
| 0.6% | 2.0ms | 0.0% | 0us | `parseURL` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:205` |
| 0.6% | 2.0ms | 0.0% | 0us | `parseOptions` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:621` |
| 0.5% | 1.9ms | 0.0% | 0us | `bound call` | `[native code]` |
| 0.5% | 1.8ms | 0.2% | 921us | `readFileSync` | `[native code]` |
| 0.4% | 1.4ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection-parameters.js:7` |
| 0.4% | 1.3ms | 0.0% | 0us | `createConnection` | `node:net:899` |
| 0.4% | 1.3ms | 0.4% | 1.3ms | `Socket` | `node:net` |
| 0.3% | 1.3ms | 0.0% | 0us | `node:fs` | `node:fs:307` |
| 0.3% | 1.3ms | 0.0% | 0us | `internal:promisify` | `internal:promisify:53` |
| 0.3% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/supports-color/index.js:2` |
| 0.3% | 1.3ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/node.js:32` |
| 0.3% | 1.3ms | 0.3% | 1.3ms | `lazyCpus` | `node:os` |
| 0.3% | 1.3ms | 0.0% | 0us | `bound` | `node:os:74` |
| 0.3% | 1.3ms | 0.0% | 0us | `node:os` | `node:os:110` |
| 0.3% | 1.3ms | 0.0% | 0us | `toWritable` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:115` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `shouldUseAutoPipelining` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/autoPipelining.js` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:110` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:7` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/lodash.js:4` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `sendCommand` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:344` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/serializer.js:4` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:62` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:18` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/buffer-writer.js:12` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/DelayQueue.js:4` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:61` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `generateFunction` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:17` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/@ioredis/commands/built/index.js:15` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/@ioredis/commands/built/index.js:16` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `reduce` | `[native code]` |
| 0.3% | 1.2ms | 0.0% | 0us | `node:events` | `node:events:9` |
| 0.3% | 1.2ms | 0.0% | 0us | `onConstruct` | `internal:streams/destroy:144` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection-parameters.js:3` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `internal:streams/writable:197` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `clearBuffer` | `internal:streams/writable` |
| 0.3% | 1.2ms | 0.0% | 0us | `onConstructed` | `internal:streams/writable:168` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/index.js:4` |
| 0.3% | 1.2ms | 0.0% | 0us | `validateLookupOptions` | `node:dns:168` |
| 0.3% | 1.2ms | 0.0% | 0us | `lookup` | `node:dns:179` |
| 0.3% | 1.2ms | 0.0% | 0us | `lookupAndConnect` | `node:net:945` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `validateFlagsOption` | `node:dns` |
| 0.3% | 1.2ms | 0.0% | 0us | `lookupAndConnectMultiple` | `node:net:971` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `removeListener` | `node:events:227` |
| 0.3% | 1.2ms | 0.0% | 0us | `onceWrapper` | `node:events:194` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `internal:streams/readable:535` |
| 0.3% | 1.2ms | 0.0% | 0us | `finishMaybe` | `internal:streams/writable:461` |
| 0.3% | 1.2ms | 0.0% | 0us | `prefinish` | `internal:streams/writable:451` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `_final` | `node:net` |
| 0.3% | 1.2ms | 0.0% | 0us | `endWritableNT` | `internal:streams/readable:876` |
| 0.3% | 1.2ms | 0.0% | 0us | `(anonymous)` | `internal:streams/writable:416` |
| 0.3% | 1.2ms | 0.3% | 1.2ms | `_write` | `internal:streams/writable` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `Writable` | `internal:streams/writable` |
| 0.3% | 1.1ms | 0.0% | 0us | `node:tls` | `node:tls:2` |
| 0.3% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:70` |
| 0.3% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:6` |
| 0.3% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/errors/index.js:4` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `node:crypto` | `node:crypto:108` |
| 0.3% | 1.1ms | 0.0% | 0us | `_destroy` | `internal:streams/destroy:63` |
| 0.3% | 1.1ms | 0.0% | 0us | `(anonymous)` | `internal:streams/writable:596` |
| 0.3% | 1.1ms | 0.0% | 0us | `destroy` | `internal:streams/destroy:41` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `_destroy` | `node:net` |
| 0.3% | 1.1ms | 0.0% | 0us | `finish` | `internal:streams/writable:478` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `end` | `node:net:299` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `(anonymous)` | `internal:streams/readable:315` |
| 0.3% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:5` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `async worker` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `connect` | `node:net` |
| 0.3% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:4` |
| 0.3% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:5` |
| 0.3% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Pipeline.js:3` |
| 0.3% | 1.1ms | 0.0% | 0us | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:49` |
| 0.3% | 1.1ms | 0.3% | 1.1ms | `printStats` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` |
| 0.3% | 1.1ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:10` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `slice` | `[native code]` |
| 0.3% | 1.0ms | 0.0% | 0us | `parseArrayElements` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:263` |
| 0.3% | 1.0ms | 0.0% | 0us | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:533` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:1` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:4` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:3` |
| 0.3% | 1.0ms | 0.0% | 0us | `parseOptions` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:636` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:612` |
| 0.3% | 1.0ms | 0.0% | 0us | `apply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:34` |
| 0.3% | 1.0ms | 0.0% | 0us | `apply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:35` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `copyObject` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:213` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:247` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:638` |
| 0.3% | 1.0ms | 0.0% | 0us | `apply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:38` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:306` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `_write` | `node:net:885` |
| 0.3% | 1.0ms | 0.0% | 0us | `isIP` | `internal:net/isIP:14` |
| 0.3% | 1.0ms | 0.0% | 0us | `lookupAndConnect` | `node:net:924` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `isIPv6` | `internal:net/isIP` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:721` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:93` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/query.js:5` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `parse` | `node:url` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `isCloudflareRuntime` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/stream.js` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/stream.js:1` |
| 0.3% | 1.0ms | 0.0% | 0us | `getStreamFuncs` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/stream.js:79` |
| 0.3% | 1.0ms | 0.0% | 0us | `requestSatisfy` | `[native code]` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection.js:6` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:12` |
| 0.3% | 1.0ms | 0.0% | 0us | `node:fs/promises` | `node:fs/promises:2` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:6` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/SentinelConnector/index.js:11` |
| 0.3% | 1.0ms | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/index.js:4` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:26` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `RegExp` | `[native code]` |
| 0.3% | 1.0ms | 0.0% | 0us | `internal:util/inspect` | `internal:util/inspect:198` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:531` |
| 0.3% | 1.0ms | 0.0% | 0us | `internal:util/inspect` | `internal:util/inspect:2` |
| 0.3% | 1.0ms | 0.0% | 0us | `stringifyArguments` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:168` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `toArg` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` |
| 0.3% | 1.0ms | 0.3% | 1.0ms | `sendCommand` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:329` |
| 0.3% | 1.0ms | 0.0% | 0us | `async runBenchmark` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:59` |
| 0.2% | 1.0ms | 0.0% | 0us | `makeSafe` | `internal:primordials:30` |
| 0.2% | 1.0ms | 0.0% | 0us | `internal:primordials` | `internal:primordials:71` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `(anonymous)` | `internal:primordials` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `resolve` | `[native code]` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `execute` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js` |
| 0.2% | 1.0ms | 0.2% | 1.0ms | `stringifyArguments` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:164` |
| 0.2% | 996us | 0.2% | 996us | `async acquire` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts` |
| 0.2% | 993us | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/index.js:2` |
| 0.2% | 989us | 0.2% | 989us | `stringifyArguments` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js` |
| 0.2% | 986us | 0.2% | 986us | `internal:validators` | `internal:validators:67` |
| 0.2% | 984us | 0.0% | 0us | `nextTick` | `[native code]` |
| 0.2% | 984us | 0.0% | 0us | `construct` | `internal:streams/destroy:124` |
| 0.2% | 984us | 0.0% | 0us | `Writable` | `internal:streams/writable:196` |
| 0.2% | 984us | 0.0% | 0us | `setup` | `[native code]` |
| 0.2% | 979us | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/utils.js:3` |
| 0.2% | 979us | 0.2% | 979us | `split` | `[native code]` |
| 0.2% | 975us | 0.2% | 975us | `checkFlag` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:77` |
| 0.2% | 975us | 0.0% | 0us | `returnReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:61` |
| 0.2% | 970us | 0.2% | 970us | `flat` | `[native code]` |
| 0.2% | 965us | 0.2% | 965us | `URL` | `[native code]` |
| 0.2% | 965us | 0.0% | 0us | `parse` | `node:url:141` |
| 0.2% | 939us | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:4` |
| 0.2% | 926us | 0.0% | 0us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:15` |
| 0.2% | 921us | 0.0% | 0us | `RedisRateLimitRepository` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:15` |
| 0.2% | 911us | 0.0% | 0us | `filter` | `[native code]` |
| 0.2% | 911us | 0.0% | 0us | `internal:util/inspect` | `internal:util/inspect:179` |
| 0.2% | 911us | 0.2% | 911us | `(anonymous)` | `internal:util/inspect` |
| 0.2% | 901us | 0.0% | 0us | `resume_` | `internal:streams/readable:582` |
| 0.2% | 901us | 0.2% | 901us | `howMuchToRead` | `internal:streams/readable` |
| 0.2% | 898us | 0.2% | 898us | `transformReply` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:180` |
| 0.2% | 893us | 0.2% | 893us | `promiseEmptyOnFulfilled` | `[native code]` |
| 0.2% | 892us | 0.2% | 892us | `(anonymous)` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:102` |
| 0.2% | 869us | 0.0% | 0us | `setup` | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js:14` |

## Function Details

### `anonymous`
`[native code]` | Self: 31.3% (105.0ms) | Total: 100.0% (474.4ms) | Samples: 92

**Called by:**
- `require` (310)
- `bound require` (22)
- `get ReadStream` (9)
- `node:stream` (8)
- `internal:fs/streams` (8)
- `internal:stream` (8)
- `node:util` (7)
- `internal:streams/operators` (7)
- `internal:streams/compose` (6)
- `internal:streams/pipeline` (5)
- `internal:streams/duplex` (4)
- `node:fs` (4)
- `node:path` (4)
- `loadAssertionError` (3)
- `internal:validators` (3)
- `internal:assert/assertion_error` (3)
- `internal:shared` (2)
- `setup` (1)
- `node:fs` (1)
- `internal:util/inspect` (1)
- `internal:promisify` (1)
- `node:tls` (1)
- `node:fs/promises` (1)
- `node:events` (1)

**Calls:**
- `(anonymous)` (34)
- `(anonymous)` (17)
- `(anonymous)` (11)
- `(anonymous)` (9)
- `internal:fs/streams` (8)
- `node:stream` (8)
- `(anonymous)` (8)
- `internal:stream` (8)
- `(anonymous)` (8)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `internal:streams/operators` (7)
- `node:util` (7)
- `(anonymous)` (6)
- `(anonymous)` (6)
- `(anonymous)` (6)
- `internal:streams/compose` (6)
- `(anonymous)` (6)
- `(anonymous)` (5)
- `(anonymous)` (5)
- `(anonymous)` (5)
- `internal:streams/pipeline` (5)
- `(anonymous)` (5)
- `internal:streams/duplex` (4)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `node:assert` (4)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (3)
- `internal:assert/assertion_error` (3)
- `(anonymous)` (3)
- `(anonymous)` (3)
- `internal:util/colors` (3)
- `internal:validators` (3)
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
- `internal:shared` (2)
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
- `node:tls` (1)
- `node:events` (1)
- `internal:primordials` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:util/inspect` (1)
- `(anonymous)` (1)
- `internal:util/inspect` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `node:crypto` (1)
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
- `node:os` (1)
- `internal:util/inspect` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:validators` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `internal:promisify` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `writeBuffered`
`[native code]` | Self: 10.3% (34.5ms) | Total: 10.3% (34.5ms) | Samples: 18

**Called by:**
- `_write` (18)

### `CustomScriptCommand`
`[native code]` | Self: 5.3% (18.0ms) | Total: 6.9% (23.2ms) | Samples: 3

**Called by:**
- `execute` (8)

**Calls:**
- `Command` (3)
- `Command` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js` | Self: 3.8% (12.8ms) | Total: 3.8% (12.8ms) | Samples: 1

**Called by:**
- `bound onceWrapper` (1)

### `bound onwrite`
`[native code]` | Self: 3.5% (11.8ms) | Total: 5.1% (17.2ms) | Samples: 1

**Called by:**
- `_write` (2)

**Calls:**
- `onwrite` (1)

### `parseModule`
`[native code]` | Self: 3.0% (10.3ms) | Total: 39.5% (132.3ms) | Samples: 9

**Called by:**
- `async (anonymous)` (116)

**Calls:**
- `(anonymous)` (51)
- `(anonymous)` (36)
- `get ReadStream` (9)
- `node:fs` (4)
- `node:path` (4)
- `(anonymous)` (2)
- `node:fs` (1)

### `howMuchToRead`
`internal:streams/readable:307` | Self: 2.6% (8.9ms) | Total: 2.6% (8.9ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `toWritable`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:117` | Self: 2.1% (7.0ms) | Total: 2.1% (7.0ms) | Samples: 1

**Called by:**
- `sendCommand` (1)

### `onwrite`
`internal:streams/writable:320` | Self: 1.6% (5.4ms) | Total: 1.6% (5.4ms) | Samples: 1

**Called by:**
- `bound onwrite` (1)

### `toString`
`[native code]` | Self: 1.2% (4.1ms) | Total: 1.2% (4.1ms) | Samples: 2

**Called by:**
- `convertBufferToString` (2)

### `maybeReadMore_`
`internal:streams/readable` | Self: 1.1% (4.0ms) | Total: 1.1% (4.0ms) | Samples: 1

**Called by:**
- `processTicksAndRejections` (1)

### `(anonymous)`
`[native code]` | Self: 1.1% (3.8ms) | Total: 42.7% (143.1ms) | Samples: 3

**Called by:**
- `processTicksAndRejections` (68)
- `refresh` (2)
- `(anonymous)` (1)

**Calls:**
- `async worker` (35)
- `async runBenchmark` (10)
- `async loadAndEvaluateModule` (9)
- `requestSatisfyUtil` (3)
- `async runBenchmark` (2)
- `(anonymous)` (2)
- `WriteStream` (2)
- `(anonymous)` (1)
- `async runBenchmark` (1)
- `async worker` (1)
- `promiseEmptyOnFulfilled` (1)
- `async acquire` (1)
- `(anonymous)` (1)
- `async runBenchmark` (1)
- `async runBenchmark` (1)

### `byteLength`
`[native code]` | Self: 1.0% (3.5ms) | Total: 1.0% (3.5ms) | Samples: 2

**Called by:**
- `toWritable` (1)
- `toWritable` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:92` | Self: 1.0% (3.4ms) | Total: 1.3% (4.6ms) | Samples: 1

**Called by:**
- `async close` (1)
- `(anonymous)` (1)

**Calls:**
- `Command` (1)

### `fetch`
`[native code]` | Self: 1.0% (3.3ms) | Total: 1.0% (3.3ms) | Samples: 3

**Called by:**
- `requestFetch` (3)

### `execute`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js:47` | Self: 0.9% (3.3ms) | Total: 7.9% (26.5ms) | Samples: 3

**Called by:**
- `async acquire` (11)

**Calls:**
- `CustomScriptCommand` (8)

### `async acquire`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:25` | Self: 0.8% (3.0ms) | Total: 31.8% (106.6ms) | Samples: 1

**Called by:**
- `async acquire` (47)

**Calls:**
- `async acquire` (46)

### `set`
`[native code]` | Self: 0.8% (2.8ms) | Total: 0.8% (2.8ms) | Samples: 1

**Called by:**
- `ensureRegistered` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:714` | Self: 0.7% (2.4ms) | Total: 0.7% (2.4ms) | Samples: 1

**Called by:**
- `tryCatcher` (1)

### `sendCommand`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:394` | Self: 0.7% (2.4ms) | Total: 1.4% (4.7ms) | Samples: 2

**Called by:**
- `async acquire` (4)

**Calls:**
- `get` (2)

### `async worker`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:78` | Self: 0.6% (2.3ms) | Total: 0.6% (2.3ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `get`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js` | Self: 0.6% (2.3ms) | Total: 0.6% (2.3ms) | Samples: 2

**Called by:**
- `get` (2)

### `internalConnectMultiple`
`node:net` | Self: 0.6% (2.1ms) | Total: 0.6% (2.1ms) | Samples: 1

**Called by:**
- `emitLookup` (1)

### `sendCommand`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:408` | Self: 0.6% (2.1ms) | Total: 0.6% (2.1ms) | Samples: 2

**Called by:**
- `async acquire` (2)

### `moduleDeclarationInstantiation`
`[native code]` | Self: 0.6% (2.1ms) | Total: 0.6% (2.1ms) | Samples: 2

**Called by:**
- `link` (2)

### `handleMonitorReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:151` | Self: 0.6% (2.0ms) | Total: 0.6% (2.0ms) | Samples: 1

**Called by:**
- `returnReply` (1)

### `unshift`
`[native code]` | Self: 0.6% (2.0ms) | Total: 0.6% (2.0ms) | Samples: 1

**Called by:**
- `execute` (1)

### `readableAddChunkPushByteMode`
`internal:streams/readable` | Self: 0.6% (2.0ms) | Total: 0.6% (2.0ms) | Samples: 1

**Called by:**
- `data` (1)

### `howMuchToRead`
`internal:streams/readable:306` | Self: 0.6% (2.0ms) | Total: 0.6% (2.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:46` | Self: 0.6% (2.0ms) | Total: 0.6% (2.0ms) | Samples: 1

**Called by:**
- `async worker` (1)

### `async loadModule`
`[native code]` | Self: 0.5% (1.7ms) | Total: 1.7% (5.7ms) | Samples: 1

**Called by:**
- `async loadModule` (2)
- `async loadAndEvaluateModule` (2)

**Calls:**
- `async loadModule` (2)
- `requestSatisfy` (1)

### `Socket`
`node:net` | Self: 0.4% (1.3ms) | Total: 0.4% (1.3ms) | Samples: 1

**Called by:**
- `createConnection` (1)

### `lazyCpus`
`node:os` | Self: 0.3% (1.3ms) | Total: 0.3% (1.3ms) | Samples: 1

**Called by:**
- `bound` (1)

### `shouldUseAutoPipelining`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/autoPipelining.js` | Self: 0.3% (1.2ms) | Total: 0.3% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `sendCommand`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:344` | Self: 0.3% (1.2ms) | Total: 0.3% (1.2ms) | Samples: 1

**Called by:**
- `async acquire` (1)

### `generateFunction`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js` | Self: 0.3% (1.2ms) | Total: 0.3% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/buffer-writer.js:12` | Self: 0.3% (1.2ms) | Total: 0.3% (1.2ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `reduce`
`[native code]` | Self: 0.3% (1.2ms) | Total: 0.3% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `Command`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:44` | Self: 0.3% (1.2ms) | Total: 0.6% (2.2ms) | Samples: 1

**Called by:**
- `CustomScriptCommand` (2)

**Calls:**
- `flat` (1)

### `clearBuffer`
`internal:streams/writable` | Self: 0.3% (1.2ms) | Total: 0.3% (1.2ms) | Samples: 1

**Called by:**
- `onConstructed` (1)

### `validateFlagsOption`
`node:dns` | Self: 0.3% (1.2ms) | Total: 0.3% (1.2ms) | Samples: 1

**Called by:**
- `validateLookupOptions` (1)

### `removeListener`
`node:events:227` | Self: 0.3% (1.2ms) | Total: 0.3% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `refresh`
`internal:util/colors:18` | Self: 0.3% (1.2ms) | Total: 1.0% (3.3ms) | Samples: 1

**Called by:**
- `internal:util/colors` (3)

**Calls:**
- `(anonymous)` (2)

### `_final`
`node:net` | Self: 0.3% (1.2ms) | Total: 0.3% (1.2ms) | Samples: 1

**Called by:**
- `prefinish` (1)

### `_write`
`internal:streams/writable` | Self: 0.3% (1.2ms) | Total: 0.3% (1.2ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `Writable`
`internal:streams/writable` | Self: 0.3% (1.1ms) | Total: 0.3% (1.1ms) | Samples: 1

**Called by:**
- `WriteStream` (1)

### `Promise`
`[native code]` | Self: 0.3% (1.1ms) | Total: 1.2% (4.1ms) | Samples: 1

**Called by:**
- `initPromise` (4)

**Calls:**
- `(anonymous)` (3)

### `require`
`[native code]` | Self: 0.3% (1.1ms) | Total: 100.0% (353.1ms) | Samples: 1

**Called by:**
- `bound require` (311)

**Calls:**
- `anonymous` (310)

### `node:crypto`
`node:crypto:108` | Self: 0.3% (1.1ms) | Total: 0.3% (1.1ms) | Samples: 1

**Called by:**
- `anonymous` (1)

### `_destroy`
`node:net` | Self: 0.3% (1.1ms) | Total: 0.3% (1.1ms) | Samples: 1

**Called by:**
- `_destroy` (1)

### `end`
`node:net:299` | Self: 0.3% (1.1ms) | Total: 0.3% (1.1ms) | Samples: 1

### `(anonymous)`
`internal:streams/readable:315` | Self: 0.3% (1.1ms) | Total: 0.3% (1.1ms) | Samples: 1

**Called by:**
- `flow` (1)

### `async worker`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` | Self: 0.3% (1.1ms) | Total: 0.3% (1.1ms) | Samples: 1

**Called by:**
- `async worker` (1)

### `connect`
`node:net` | Self: 0.3% (1.1ms) | Total: 0.3% (1.1ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `assign`
`[native code]` | Self: 0.3% (1.1ms) | Total: 1.3% (4.5ms) | Samples: 1

**Called by:**
- `node:assert` (4)

**Calls:**
- `get` (3)

### `printStats`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` | Self: 0.3% (1.1ms) | Total: 0.3% (1.1ms) | Samples: 1

**Called by:**
- `async runBenchmark` (1)

### `slice`
`[native code]` | Self: 0.3% (1.0ms) | Total: 0.3% (1.0ms) | Samples: 1

**Called by:**
- `parseArrayElements` (1)

### `copyObject`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:213` | Self: 0.3% (1.0ms) | Total: 0.3% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `isIPv6`
`internal:net/isIP` | Self: 0.3% (1.0ms) | Total: 0.3% (1.0ms) | Samples: 1

**Called by:**
- `isIP` (1)

### `_write`
`node:net:885` | Self: 0.3% (1.0ms) | Total: 0.3% (1.0ms) | Samples: 1

**Called by:**
- `writeOrBuffer` (1)

### `parse`
`node:url` | Self: 0.3% (1.0ms) | Total: 0.3% (1.0ms) | Samples: 1

**Called by:**
- `urlParse` (1)

### `async (anonymous)`
`[native code]` | Self: 0.3% (1.0ms) | Total: 43.3% (145.0ms) | Samples: 1

**Called by:**
- `requestInstantiate` (4)
- `async (anonymous)` (4)

**Calls:**
- `parseModule` (116)
- `async (anonymous)` (4)
- `requestFetch` (3)
- `ensureRegistered` (1)
- `resolve` (1)

### `isCloudflareRuntime`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/stream.js` | Self: 0.3% (1.0ms) | Total: 0.3% (1.0ms) | Samples: 1

**Called by:**
- `getStreamFuncs` (1)

### `async acquire`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:26` | Self: 0.3% (1.0ms) | Total: 0.3% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `RegExp`
`[native code]` | Self: 0.3% (1.0ms) | Total: 0.3% (1.0ms) | Samples: 1

**Called by:**
- `internal:util/inspect` (1)

### `execute`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:531` | Self: 0.3% (1.0ms) | Total: 0.3% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `toArg`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js` | Self: 0.3% (1.0ms) | Total: 0.3% (1.0ms) | Samples: 1

**Called by:**
- `stringifyArguments` (1)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` | Self: 0.3% (1.0ms) | Total: 0.3% (1.0ms) | Samples: 1

**Called by:**
- `async runBenchmark` (1)

### `sendCommand`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:329` | Self: 0.3% (1.0ms) | Total: 0.3% (1.0ms) | Samples: 1

**Called by:**
- `async acquire` (1)

### `(anonymous)`
`internal:primordials` | Self: 0.2% (1.0ms) | Total: 0.2% (1.0ms) | Samples: 1

**Called by:**
- `forEach` (1)

### `resolve`
`[native code]` | Self: 0.2% (1.0ms) | Total: 0.2% (1.0ms) | Samples: 1

**Called by:**
- `async (anonymous)` (1)

### `execute`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js` | Self: 0.2% (1.0ms) | Total: 0.2% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `stringifyArguments`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:164` | Self: 0.2% (1.0ms) | Total: 0.2% (1.0ms) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `async acquire`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts` | Self: 0.2% (996us) | Total: 0.2% (996us) | Samples: 1

**Called by:**
- `async acquire` (1)

### `stringifyArguments`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js` | Self: 0.2% (989us) | Total: 0.2% (989us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `internal:validators`
`internal:validators:67` | Self: 0.2% (986us) | Total: 0.2% (986us) | Samples: 1

**Called by:**
- `anonymous` (1)

### `split`
`[native code]` | Self: 0.2% (979us) | Total: 0.2% (979us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `checkFlag`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:77` | Self: 0.2% (975us) | Total: 0.2% (975us) | Samples: 1

**Called by:**
- `returnReply` (1)

### `flat`
`[native code]` | Self: 0.2% (970us) | Total: 0.2% (970us) | Samples: 1

**Called by:**
- `Command` (1)

### `URL`
`[native code]` | Self: 0.2% (965us) | Total: 0.2% (965us) | Samples: 1

**Called by:**
- `parse` (1)

### `processTicksAndRejections`
`[native code]` | Self: 0.2% (952us) | Total: 51.9% (174.0ms) | Samples: 1

**Calls:**
- `(anonymous)` (68)
- `emitReadable_` (11)
- `(anonymous)` (4)
- `endWritableNT` (1)
- `onConstruct` (1)
- `maybeReadMore_` (1)
- `resume_` (1)
- `finish` (1)

### `readFileSync`
`[native code]` | Self: 0.2% (921us) | Total: 0.5% (1.8ms) | Samples: 1

**Called by:**
- `readFileSync` (1)
- `RedisRateLimitRepository` (1)

**Calls:**
- `readFileSync` (1)

### `(anonymous)`
`internal:util/inspect` | Self: 0.2% (911us) | Total: 0.2% (911us) | Samples: 1

**Called by:**
- `filter` (1)

### `howMuchToRead`
`internal:streams/readable` | Self: 0.2% (901us) | Total: 0.2% (901us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `transformReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:180` | Self: 0.2% (898us) | Total: 0.2% (898us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `promiseEmptyOnFulfilled`
`[native code]` | Self: 0.2% (893us) | Total: 0.2% (893us) | Samples: 1

**Called by:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:102` | Self: 0.2% (892us) | Total: 0.2% (892us) | Samples: 1

**Called by:**
- `async acquire` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:4` | Self: 0.0% (0us) | Total: 0.2% (939us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:10` | Self: 0.0% (0us) | Total: 0.7% (2.3ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `transformReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:178` | Self: 0.0% (0us) | Total: 1.2% (4.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `convertBufferToString` (2)

### `toWritable`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:115` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `sendCommand` (1)

**Calls:**
- `byteLength` (1)

### `requestSatisfy`
`[native code]` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `async loadModule` (1)

**Calls:**
- `requestSatisfyUtil` (1)

### `node:fs/promises`
`node:fs/promises:2` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `apply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:34` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `finish`
`internal:streams/writable:478` | Self: 0.0% (0us) | Total: 0.3% (1.1ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `(anonymous)` (1)

### `destroy`
`internal:streams/destroy:41` | Self: 0.0% (0us) | Total: 0.3% (1.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `_destroy` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/index.js:8` | Self: 0.0% (0us) | Total: 0.6% (2.3ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `sendCommand`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:406` | Self: 0.0% (0us) | Total: 19.3% (64.7ms) | Samples: 0

**Called by:**
- `async acquire` (24)
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (22)
- `toWritable` (1)
- `toWritable` (1)
- `toWritable` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Pipeline.js:3` | Self: 0.0% (0us) | Total: 0.3% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`internal:streams/writable:248` | Self: 0.0% (0us) | Total: 16.1% (54.0ms) | Samples: 0

**Called by:**
- `sendCommand` (22)

**Calls:**
- `writeOrBuffer` (21)
- `_write` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/debug.js:4` | Self: 0.0% (0us) | Total: 1.4% (4.7ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `bound require` (4)

### `makeSafe`
`internal:primordials:30` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `internal:primordials` (1)

**Calls:**
- `bound call` (1)

### `setup`
`[native code]` | Self: 0.0% (0us) | Total: 0.2% (984us) | Samples: 0

**Called by:**
- `nextTick` (1)

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:612` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `copyObject` (1)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:37` | Self: 0.0% (0us) | Total: 14.3% (48.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (10)
- `async runBenchmark` (2)

**Calls:**
- `async acquire` (12)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:93` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `WriteStream`
`internal:fs/streams:245` | Self: 0.0% (0us) | Total: 0.6% (2.1ms) | Samples: 0

**Called by:**
- `WriteStream` (2)

**Calls:**
- `Writable` (1)
- `Writable` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/index.js:4` | Self: 0.0% (0us) | Total: 0.6% (2.0ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `node:stream`
`node:stream:2` | Self: 0.0% (0us) | Total: 2.6% (8.8ms) | Samples: 0

**Called by:**
- `anonymous` (8)

**Calls:**
- `anonymous` (8)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:3` | Self: 0.0% (0us) | Total: 0.6% (2.2ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `_destroy`
`internal:streams/destroy:63` | Self: 0.0% (0us) | Total: 0.3% (1.1ms) | Samples: 0

**Called by:**
- `destroy` (1)

**Calls:**
- `_destroy` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection.js:5` | Self: 0.0% (0us) | Total: 1.7% (5.8ms) | Samples: 0

**Called by:**
- `anonymous` (5)

**Calls:**
- `bound require` (5)

### `stringifyArguments`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:168` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `toArg` (1)

### `apply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:35` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `onConstructed`
`internal:streams/writable:168` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `clearBuffer` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/supports-color/index.js:2` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `node:assert`
`node:assert:588` | Self: 0.0% (0us) | Total: 1.3% (4.5ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `assign` (4)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/@ioredis/commands/built/index.js:16` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `forEach` (1)

**Calls:**
- `reduce` (1)

### `internal:primordials`
`internal:primordials:71` | Self: 0.0% (0us) | Total: 0.2% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `makeSafe` (1)

### `requestSatisfyUtil`
`[native code]` | Self: 0.0% (0us) | Total: 1.3% (4.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (3)
- `requestSatisfy` (1)

**Calls:**
- `requestInstantiate` (4)

### `(anonymous)`
`internal:streams/readable:331` | Self: 0.0% (0us) | Total: 3.5% (11.9ms) | Samples: 0

**Called by:**
- `flow` (2)
- `resume_` (1)

**Calls:**
- `howMuchToRead` (1)
- `howMuchToRead` (1)
- `howMuchToRead` (1)

### `urlParse`
`node:url:31` | Self: 0.0% (0us) | Total: 0.6% (2.0ms) | Samples: 0

**Called by:**
- `parseURL` (2)

**Calls:**
- `parse` (1)
- `parse` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:247` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `apply` (1)

**Calls:**
- `(anonymous)` (1)

### `node:events`
`node:events:9` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:4` | Self: 0.0% (0us) | Total: 5.6% (18.9ms) | Samples: 0

**Called by:**
- `anonymous` (17)

**Calls:**
- `bound require` (17)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:5` | Self: 0.0% (0us) | Total: 0.3% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `prefinish`
`internal:streams/writable:451` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `finishMaybe` (1)

**Calls:**
- `_final` (1)

### `execute`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:533` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `parseArrayElements` (1)

### `async acquire`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts:36` | Self: 0.0% (0us) | Total: 31.8% (106.6ms) | Samples: 0

**Called by:**
- `async acquire` (47)

**Calls:**
- `async acquire` (47)

### `node:tls`
`node:tls:2` | Self: 0.0% (0us) | Total: 0.3% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:6` | Self: 0.0% (0us) | Total: 11.5% (38.5ms) | Samples: 0

**Called by:**
- `anonymous` (34)

**Calls:**
- `bound require` (34)

### `parseArrayElements`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:263` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `execute` (1)

**Calls:**
- `slice` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:61` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `forEach` (1)

### `emitReadable_`
`internal:streams/readable:396` | Self: 0.0% (0us) | Total: 7.0% (23.4ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (11)

**Calls:**
- `flow` (11)

### `node:path`
`node:path:2` | Self: 0.0% (0us) | Total: 1.2% (4.1ms) | Samples: 0

**Called by:**
- `parseModule` (4)

**Calls:**
- `anonymous` (4)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/index.js:4` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `returnReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:51` | Self: 0.0% (0us) | Total: 0.6% (2.0ms) | Samples: 0

**Called by:**
- `returnReply` (1)

**Calls:**
- `handleMonitorReply` (1)

### `evaluate`
`[native code]` | Self: 0.0% (0us) | Total: 2.1% (7.0ms) | Samples: 0

**Called by:**
- `moduleEvaluation` (7)

**Calls:**
- `(module)` (7)

### `async acquire`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts:26` | Self: 0.0% (0us) | Total: 32.1% (107.6ms) | Samples: 0

**Called by:**
- `async worker` (36)
- `async runBenchmark` (12)

**Calls:**
- `async acquire` (47)
- `async acquire` (1)

### `parse`
`node:url:141` | Self: 0.0% (0us) | Total: 0.2% (965us) | Samples: 0

**Called by:**
- `urlParse` (1)

**Calls:**
- `URL` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:12` | Self: 0.0% (0us) | Total: 2.3% (7.9ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `bound require` (7)

### `internal:streams/pipeline`
`internal:streams/pipeline:2` | Self: 0.0% (0us) | Total: 1.6% (5.5ms) | Samples: 0

**Called by:**
- `anonymous` (5)

**Calls:**
- `anonymous` (5)

### `(anonymous)`
`internal:streams/writable:197` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `bound onceWrapper` (1)

**Calls:**
- `onConstructed` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/index.js:6` | Self: 0.0% (0us) | Total: 0.9% (3.0ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `(anonymous)`
`internal:streams/readable:535` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `onceWrapper` (1)

**Calls:**
- `removeListener` (1)

### `Redis`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:52` | Self: 0.0% (0us) | Total: 0.9% (3.1ms) | Samples: 0

**Called by:**
- `RedisRateLimitRepository` (3)

**Calls:**
- `parseOptions` (2)
- `parseOptions` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:4` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `isIP`
`internal:net/isIP:14` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `lookupAndConnect` (1)

**Calls:**
- `isIPv6` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Pipeline.js:9` | Self: 0.0% (0us) | Total: 0.7% (2.3ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `emit`
`node:events:95` | Self: 0.0% (0us) | Total: 3.3% (11.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (8)

**Calls:**
- `(anonymous)` (8)

### `endWritableNT`
`internal:streams/readable:876` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/@ioredis/commands/built/index.js:15` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `forEach` (1)

### `resume_`
`internal:streams/readable:582` | Self: 0.0% (0us) | Total: 0.2% (901us) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:3` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/index.js:9` | Self: 0.0% (0us) | Total: 1.4% (4.7ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `bound require` (4)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:17` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:10` | Self: 0.0% (0us) | Total: 1.8% (6.3ms) | Samples: 0

**Called by:**
- `anonymous` (6)

**Calls:**
- `bound require` (6)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/util.js:5` | Self: 0.0% (0us) | Total: 0.9% (3.2ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `linkAndEvaluateModule`
`[native code]` | Self: 0.0% (0us) | Total: 0.6% (2.1ms) | Samples: 0

**Called by:**
- `async loadAndEvaluateModule` (2)

**Calls:**
- `link` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:5` | Self: 0.0% (0us) | Total: 0.6% (2.1ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `(module)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:110` | Self: 0.0% (0us) | Total: 2.1% (7.0ms) | Samples: 0

**Called by:**
- `evaluate` (7)

**Calls:**
- `async runBenchmark` (7)

### `node:fs`
`node:fs:2` | Self: 0.0% (0us) | Total: 1.3% (4.4ms) | Samples: 0

**Called by:**
- `parseModule` (4)

**Calls:**
- `anonymous` (4)

### `onceWrapper`
`node:events:194` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `bound onceWrapper` (1)

**Calls:**
- `(anonymous)` (1)

### `parseOptions`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:621` | Self: 0.0% (0us) | Total: 0.6% (2.0ms) | Samples: 0

**Called by:**
- `Redis` (2)

**Calls:**
- `parseURL` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:721` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `tryCatcher` (1)

**Calls:**
- `(anonymous)` (1)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:23` | Self: 0.0% (0us) | Total: 1.2% (4.0ms) | Samples: 0

**Called by:**
- `async runBenchmark` (4)

**Calls:**
- `RedisRateLimitRepository` (3)
- `RedisRateLimitRepository` (1)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:64` | Self: 0.0% (0us) | Total: 1.0% (3.4ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `async close` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:62` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `forEach` (1)

**Calls:**
- `generateFunction` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:6` | Self: 0.0% (0us) | Total: 3.1% (10.5ms) | Samples: 0

**Called by:**
- `anonymous` (9)

**Calls:**
- `bound require` (9)

### `onConstruct`
`internal:streams/destroy:144` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (1)

**Calls:**
- `emit` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:26` | Self: 0.0% (0us) | Total: 3.3% (11.2ms) | Samples: 0

**Called by:**
- `emit` (8)

**Calls:**
- `execute` (5)
- `execute` (1)
- `execute` (1)
- `execute` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:6` | Self: 0.0% (0us) | Total: 0.3% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/query.js:5` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `validateLookupOptions`
`node:dns:168` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `lookup` (1)

**Calls:**
- `validateFlagsOption` (1)

### `parseURL`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:205` | Self: 0.0% (0us) | Total: 0.6% (2.0ms) | Samples: 0

**Called by:**
- `parseOptions` (2)

**Calls:**
- `urlParse` (2)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:19` | Self: 0.0% (0us) | Total: 2.1% (7.0ms) | Samples: 0

**Called by:**
- `(module)` (7)

**Calls:**
- `async runBenchmark` (4)
- `async runBenchmark` (2)
- `async runBenchmark` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/stream.js:1` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `getStreamFuncs` (1)

### `internal:streams/compose`
`internal:streams/compose:2` | Self: 0.0% (0us) | Total: 2.0% (6.9ms) | Samples: 0

**Called by:**
- `anonymous` (6)

**Calls:**
- `anonymous` (6)

### `Command`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:46` | Self: 0.0% (0us) | Total: 1.2% (4.1ms) | Samples: 0

**Called by:**
- `CustomScriptCommand` (3)
- `(anonymous)` (1)

**Calls:**
- `initPromise` (4)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js:110` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `async acquire` (1)

**Calls:**
- `shouldUseAutoPipelining` (1)

### `open`
`node:net:265` | Self: 0.0% (0us) | Total: 4.5% (15.2ms) | Samples: 0

**Calls:**
- `bound afterConnectMultiple` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection-parameters.js:7` | Self: 0.0% (0us) | Total: 0.4% (1.4ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `async close`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:50` | Self: 0.0% (0us) | Total: 1.0% (3.4ms) | Samples: 0

**Called by:**
- `async close` (1)

**Calls:**
- `(anonymous)` (1)

### `node:util`
`node:util:2` | Self: 0.0% (0us) | Total: 2.3% (7.8ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `anonymous` (7)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/defaults.js:82` | Self: 0.0% (0us) | Total: 2.3% (7.7ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `bound require` (7)

### `internal:streams/duplex`
`internal:streams/duplex:2` | Self: 0.0% (0us) | Total: 1.2% (4.3ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `anonymous` (4)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:46` | Self: 0.0% (0us) | Total: 0.6% (2.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `async runConcurrentRequests` (2)

### `returnReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:61` | Self: 0.0% (0us) | Total: 0.2% (975us) | Samples: 0

**Called by:**
- `returnReply` (1)

**Calls:**
- `checkFlag` (1)

### `apply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:38` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `(anonymous)` (1)

### `RedisRateLimitRepository`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:14` | Self: 0.0% (0us) | Total: 0.9% (3.1ms) | Samples: 0

**Called by:**
- `async runBenchmark` (3)

**Calls:**
- `Redis` (3)

### `moduleEvaluation`
`[native code]` | Self: 0.0% (0us) | Total: 4.2% (14.1ms) | Samples: 0

**Called by:**
- `moduleEvaluation` (7)
- `async loadAndEvaluateModule` (7)

**Calls:**
- `evaluate` (7)
- `moduleEvaluation` (7)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:49` | Self: 0.0% (0us) | Total: 0.3% (1.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `printStats` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:21` | Self: 0.0% (0us) | Total: 0.6% (2.0ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `internal:util/inspect`
`internal:util/inspect:198` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `RegExp` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/serializer.js:4` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `createConnection`
`node:net:899` | Self: 0.0% (0us) | Total: 0.4% (1.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `Socket` (1)

### `afterConnectMultiple`
`node:net:1173` | Self: 0.0% (0us) | Total: 4.5% (15.2ms) | Samples: 0

**Called by:**
- `bound afterConnectMultiple` (3)

**Calls:**
- `afterConnect` (3)

### `internal:stream`
`internal:stream:2` | Self: 0.0% (0us) | Total: 2.6% (8.8ms) | Samples: 0

**Called by:**
- `anonymous` (8)

**Calls:**
- `anonymous` (8)

### `requestFetch`
`[native code]` | Self: 0.0% (0us) | Total: 1.0% (3.3ms) | Samples: 0

**Called by:**
- `async (anonymous)` (3)

**Calls:**
- `fetch` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/node.js:240` | Self: 0.0% (0us) | Total: 0.6% (2.1ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `setup` (1)
- `bound require` (1)

### `bound call`
`[native code]` | Self: 0.0% (0us) | Total: 0.5% (1.9ms) | Samples: 0

**Called by:**
- `makeSafe` (1)
- `internal:util/inspect` (1)

**Calls:**
- `forEach` (1)
- `filter` (1)

### `execute`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js:544` | Self: 0.0% (0us) | Total: 2.4% (8.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (5)

**Calls:**
- `returnReply` (5)

### `bound require`
`[native code]` | Self: 0.0% (0us) | Total: 100.0% (377.7ms) | Samples: 0

**Called by:**
- `(anonymous)` (51)
- `(anonymous)` (36)
- `(anonymous)` (34)
- `(anonymous)` (17)
- `(anonymous)` (11)
- `(anonymous)` (9)
- `(anonymous)` (8)
- `(anonymous)` (8)
- `(anonymous)` (7)
- `(anonymous)` (7)
- `(anonymous)` (6)
- `(anonymous)` (6)
- `(anonymous)` (6)
- `(anonymous)` (6)
- `(anonymous)` (5)
- `(anonymous)` (5)
- `(anonymous)` (5)
- `(anonymous)` (5)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (4)
- `(anonymous)` (4)
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
- `(anonymous)` (2)
- `(anonymous)` (2)
- `(anonymous)` (1)
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

**Calls:**
- `require` (311)
- `anonymous` (22)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:5` | Self: 0.0% (0us) | Total: 0.3% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/lodash.js:4` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `filter`
`[native code]` | Self: 0.0% (0us) | Total: 0.2% (911us) | Samples: 0

**Called by:**
- `bound call` (1)

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:189` | Self: 0.0% (0us) | Total: 0.6% (2.1ms) | Samples: 0

**Called by:**
- `apply` (1)
- `parseOptions` (1)

**Calls:**
- `apply` (1)
- `apply` (1)

### `writeOrBuffer`
`internal:streams/writable:282` | Self: 0.0% (0us) | Total: 15.7% (52.8ms) | Samples: 0

**Called by:**
- `(anonymous)` (21)

**Calls:**
- `_write` (18)
- `_write` (2)
- `_write` (1)

### `returnReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:74` | Self: 0.0% (0us) | Total: 1.5% (5.0ms) | Samples: 0

**Called by:**
- `returnReply` (3)

**Calls:**
- `(anonymous)` (3)

### `async loadAndEvaluateModule`
`[native code]` | Self: 0.0% (0us) | Total: 4.4% (14.9ms) | Samples: 0

**Called by:**
- `(anonymous)` (9)
- `async loadAndEvaluateModule` (2)

**Calls:**
- `moduleEvaluation` (7)
- `async loadModule` (2)
- `async loadAndEvaluateModule` (2)
- `linkAndEvaluateModule` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection.js:6` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `node:os`
`node:os:110` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound` (1)

### `RedisRateLimitRepository`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:15` | Self: 0.0% (0us) | Total: 0.2% (921us) | Samples: 0

**Called by:**
- `async runBenchmark` (1)

**Calls:**
- `readFileSync` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:8` | Self: 0.0% (0us) | Total: 1.2% (4.1ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `bound require` (4)

### `lookupAndConnect`
`node:net:924` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `connect` (1)

**Calls:**
- `isIP` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/index.js:4` | Self: 0.0% (0us) | Total: 17.4% (58.3ms) | Samples: 0

**Called by:**
- `parseModule` (51)

**Calls:**
- `bound require` (51)

### `forEach`
`[native code]` | Self: 0.0% (0us) | Total: 1.0% (3.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)
- `(anonymous)` (1)
- `bound call` (1)

**Calls:**
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)

### `emit`
`node:events:92` | Self: 0.0% (0us) | Total: 4.9% (16.4ms) | Samples: 0

**Called by:**
- `afterConnect` (3)
- `onConstruct` (1)

**Calls:**
- `bound onceWrapper` (4)

### `setup`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js:14` | Self: 0.0% (0us) | Total: 0.2% (869us) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/lib/textParsers.js:1` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/index.js:3` | Self: 0.0% (0us) | Total: 0.6% (2.1ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/errors/index.js:4` | Self: 0.0% (0us) | Total: 0.3% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `loadAssertionError`
`node:assert:28` | Self: 0.0% (0us) | Total: 1.0% (3.3ms) | Samples: 0

**Called by:**
- `get` (3)

**Calls:**
- `anonymous` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:11` | Self: 0.0% (0us) | Total: 1.3% (4.6ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `bound require` (4)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/connection-parameters.js:3` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:12` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:323` | Self: 0.0% (0us) | Total: 1.5% (5.0ms) | Samples: 0

**Called by:**
- `returnReply` (3)

**Calls:**
- `transformReply` (2)
- `transformReply` (1)

### `(anonymous)`
`internal:streams/writable:416` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `endWritableNT` (1)

**Calls:**
- `finishMaybe` (1)

### `afterConnect`
`node:net:1149` | Self: 0.0% (0us) | Total: 4.5% (15.2ms) | Samples: 0

**Called by:**
- `afterConnectMultiple` (3)

**Calls:**
- `emit` (3)

### `parseOptions`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:636` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `Redis` (1)

**Calls:**
- `(anonymous)` (1)

### `toWritable`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:150` | Self: 0.0% (0us) | Total: 0.6% (2.2ms) | Samples: 0

**Called by:**
- `sendCommand` (1)

**Calls:**
- `byteLength` (1)

### `lookupAndConnectMultiple`
`node:net:971` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `lookupAndConnect` (1)

**Calls:**
- `lookup` (1)

### `(anonymous)`
`internal:streams/writable:596` | Self: 0.0% (0us) | Total: 0.3% (1.1ms) | Samples: 0

**Called by:**
- `finish` (1)

**Calls:**
- `destroy` (1)

### `async acquire`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:30` | Self: 0.0% (0us) | Total: 30.9% (103.6ms) | Samples: 0

**Called by:**
- `async acquire` (46)

**Calls:**
- `sendCommand` (24)
- `execute` (11)
- `sendCommand` (4)
- `sendCommand` (2)
- `sendCommand` (1)
- `sendCommand` (1)
- `(anonymous)` (1)
- `execute` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/index.js:6` | Self: 0.0% (0us) | Total: 0.7% (2.4ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/node.js:32` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`internal:streams/readable:370` | Self: 0.0% (0us) | Total: 3.3% (11.2ms) | Samples: 0

**Called by:**
- `flow` (8)

**Calls:**
- `emit` (8)

### `flow`
`internal:streams/readable:594` | Self: 0.0% (0us) | Total: 7.0% (23.4ms) | Samples: 0

**Called by:**
- `emitReadable_` (11)

**Calls:**
- `(anonymous)` (8)
- `(anonymous)` (2)
- `(anonymous)` (1)

### `bound`
`node:os:74` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `node:os` (1)

**Calls:**
- `lazyCpus` (1)

### `async runBenchmark`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:59` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `async runConcurrentRequests` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/utils.js:8` | Self: 0.0% (0us) | Total: 0.7% (2.4ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `async close`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts:49` | Self: 0.0% (0us) | Total: 1.0% (3.4ms) | Samples: 0

**Called by:**
- `async runBenchmark` (1)

**Calls:**
- `async close` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/index.js:3` | Self: 0.0% (0us) | Total: 12.3% (41.3ms) | Samples: 0

**Called by:**
- `parseModule` (36)

**Calls:**
- `bound require` (36)

### `WriteStream`
`node:tty:42` | Self: 0.0% (0us) | Total: 0.6% (2.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `WriteStream` (2)

### `internal:shared`
`internal:shared:2` | Self: 0.0% (0us) | Total: 0.6% (2.1ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `anonymous` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:4` | Self: 0.0% (0us) | Total: 0.3% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `lookupAndConnect`
`node:net:945` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `connect` (1)

**Calls:**
- `lookupAndConnectMultiple` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:7` | Self: 0.0% (0us) | Total: 3.8% (12.9ms) | Samples: 0

**Called by:**
- `anonymous` (11)

**Calls:**
- `bound require` (11)

### `internal:assert/assertion_error`
`internal:assert/assertion_error:2` | Self: 0.0% (0us) | Total: 1.0% (3.3ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `link`
`[native code]` | Self: 0.0% (0us) | Total: 1.9% (6.5ms) | Samples: 0

**Called by:**
- `link` (4)
- `linkAndEvaluateModule` (2)

**Calls:**
- `link` (4)
- `moduleDeclarationInstantiation` (2)

### `async runConcurrentRequests`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:91` | Self: 0.0% (0us) | Total: 0.9% (3.2ms) | Samples: 0

**Called by:**
- `async runConcurrentRequests` (3)

**Calls:**
- `async worker` (3)

### `async worker`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:82` | Self: 0.0% (0us) | Total: 18.3% (61.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (35)
- `async worker` (2)

**Calls:**
- `async acquire` (36)
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:18` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `get`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/debug.js:76` | Self: 0.0% (0us) | Total: 0.6% (2.3ms) | Samples: 0

**Called by:**
- `sendCommand` (2)

**Calls:**
- `get` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/DelayQueue.js:4` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

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

### `internal:util/inspect`
`internal:util/inspect:179` | Self: 0.0% (0us) | Total: 0.2% (911us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound call` (1)

### `internal:util/inspect`
`internal:util/inspect:2` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `convertBufferToString`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:33` | Self: 0.0% (0us) | Total: 1.2% (4.1ms) | Samples: 0

**Called by:**
- `transformReply` (2)

**Calls:**
- `toString` (2)

### `tryCatcher`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/standard-as-callback/built/utils.js:12` | Self: 0.0% (0us) | Total: 1.0% (3.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `(anonymous)` (1)
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/utils.js:3` | Self: 0.0% (0us) | Total: 2.7% (9.0ms) | Samples: 0

**Called by:**
- `anonymous` (8)

**Calls:**
- `bound require` (8)

### `internal:validators`
`internal:validators:2` | Self: 0.0% (0us) | Total: 0.9% (3.1ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `anonymous` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/StandaloneConnector.js:54` | Self: 0.0% (0us) | Total: 1.4% (4.7ms) | Samples: 0

**Called by:**
- `processTicksAndRejections` (4)

**Calls:**
- `connect` (2)
- `createConnection` (1)
- `connect` (1)

### `ensureRegistered`
`[native code]` | Self: 0.0% (0us) | Total: 0.8% (2.8ms) | Samples: 0

**Called by:**
- `async (anonymous)` (1)

**Calls:**
- `set` (1)

### `async worker`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:77` | Self: 0.0% (0us) | Total: 0.9% (3.2ms) | Samples: 0

**Called by:**
- `async runConcurrentRequests` (3)

**Calls:**
- `async worker` (2)
- `async worker` (1)

### `construct`
`internal:streams/destroy:124` | Self: 0.0% (0us) | Total: 0.2% (984us) | Samples: 0

**Called by:**
- `Writable` (1)

**Calls:**
- `nextTick` (1)

### `finishMaybe`
`internal:streams/writable:461` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `prefinish` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/StandaloneConnector.js:4` | Self: 0.0% (0us) | Total: 0.6% (2.0ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js:638` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `apply` (1)

**Calls:**
- `apply` (1)

### `requestInstantiate`
`[native code]` | Self: 0.0% (0us) | Total: 1.3% (4.4ms) | Samples: 0

**Called by:**
- `requestSatisfyUtil` (4)

**Calls:**
- `async (anonymous)` (4)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/index.js:4` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/utils-webcrypto.js:1` | Self: 0.0% (0us) | Total: 0.7% (2.4ms) | Samples: 0

**Called by:**
- `anonymous` (2)

**Calls:**
- `bound require` (2)

### `lookup`
`node:dns:179` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `lookupAndConnectMultiple` (1)

**Calls:**
- `validateLookupOptions` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/transaction.js:6` | Self: 0.0% (0us) | Total: 1.3% (4.6ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `bound require` (4)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:16` | Self: 0.0% (0us) | Total: 1.2% (4.2ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `bound require` (4)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:9` | Self: 0.0% (0us) | Total: 1.1% (3.9ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/client.js:6` | Self: 0.0% (0us) | Total: 1.3% (4.5ms) | Samples: 0

**Called by:**
- `anonymous` (4)

**Calls:**
- `bound require` (4)

### `data`
`node:net:281` | Self: 0.0% (0us) | Total: 0.6% (2.0ms) | Samples: 0

**Calls:**
- `readableAddChunkPushByteMode` (1)

### `_write`
`node:net:890` | Self: 0.0% (0us) | Total: 10.3% (34.5ms) | Samples: 0

**Called by:**
- `writeOrBuffer` (18)

**Calls:**
- `writeBuffered` (18)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/utils.js:3` | Self: 0.0% (0us) | Total: 0.2% (979us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `split` (1)

### `nextTick`
`[native code]` | Self: 0.0% (0us) | Total: 0.2% (984us) | Samples: 0

**Called by:**
- `construct` (1)

**Calls:**
- `setup` (1)

### `(anonymous)`
`node:dns:200` | Self: 0.0% (0us) | Total: 0.6% (2.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `emitLookup` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:10` | Self: 0.0% (0us) | Total: 1.8% (6.1ms) | Samples: 0

**Called by:**
- `anonymous` (5)

**Calls:**
- `bound require` (5)

### `_write`
`node:net:892` | Self: 0.0% (0us) | Total: 5.1% (17.2ms) | Samples: 0

**Called by:**
- `writeOrBuffer` (2)

**Calls:**
- `bound onwrite` (2)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:282` | Self: 0.0% (0us) | Total: 0.8% (3.0ms) | Samples: 0

**Called by:**
- `Promise` (3)

**Calls:**
- `stringifyArguments` (1)
- `stringifyArguments` (1)
- `stringifyArguments` (1)

### `internal:fs/streams`
`internal:fs/streams:2` | Self: 0.0% (0us) | Total: 2.6% (8.8ms) | Samples: 0

**Called by:**
- `anonymous` (8)

**Calls:**
- `anonymous` (8)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/utils.js:5` | Self: 0.0% (0us) | Total: 2.6% (8.8ms) | Samples: 0

**Called by:**
- `anonymous` (8)

**Calls:**
- `bound require` (8)

### `Writable`
`internal:streams/writable:196` | Self: 0.0% (0us) | Total: 0.2% (984us) | Samples: 0

**Called by:**
- `WriteStream` (1)

**Calls:**
- `construct` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/index.js:2` | Self: 0.0% (0us) | Total: 0.2% (993us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js:7` | Self: 0.0% (0us) | Total: 0.3% (1.2ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `internal:util/colors`
`internal:util/colors:24` | Self: 0.0% (0us) | Total: 1.0% (3.3ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `refresh` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/crypto/sasl.js:2` | Self: 0.0% (0us) | Total: 1.0% (3.3ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:15` | Self: 0.0% (0us) | Total: 0.2% (926us) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `execute`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js:39` | Self: 0.0% (0us) | Total: 0.6% (2.0ms) | Samples: 0

**Called by:**
- `async acquire` (1)

**Calls:**
- `unshift` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:6` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `get`
`node:assert:70` | Self: 0.0% (0us) | Total: 1.0% (3.3ms) | Samples: 0

**Called by:**
- `assign` (3)

**Calls:**
- `loadAssertionError` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-errors/index.js:3` | Self: 0.0% (0us) | Total: 1.9% (6.6ms) | Samples: 0

**Called by:**
- `anonymous` (6)

**Calls:**
- `bound require` (6)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:10` | Self: 0.0% (0us) | Total: 0.3% (1.1ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `internal:streams/operators`
`internal:streams/operators:2` | Self: 0.0% (0us) | Total: 2.3% (7.8ms) | Samples: 0

**Called by:**
- `anonymous` (7)

**Calls:**
- `anonymous` (7)

### `internal:promisify`
`internal:promisify:53` | Self: 0.0% (0us) | Total: 0.3% (1.3ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `anonymous` (1)

### `getStreamFuncs`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/stream.js:79` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `isCloudflareRuntime` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/standard-as-callback/built/index.js:22` | Self: 0.0% (0us) | Total: 1.0% (3.5ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `tryCatcher` (2)

### `initPromise`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js:275` | Self: 0.0% (0us) | Total: 1.2% (4.1ms) | Samples: 0

**Called by:**
- `Command` (4)

**Calls:**
- `Promise` (4)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/index.js:5` | Self: 0.0% (0us) | Total: 1.9% (6.6ms) | Samples: 0

**Called by:**
- `anonymous` (6)

**Calls:**
- `bound require` (6)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/index.js:8` | Self: 0.0% (0us) | Total: 0.6% (2.2ms) | Samples: 0

**Called by:**
- `parseModule` (2)

**Calls:**
- `bound require` (2)

### `get ReadStream`
`node:fs:578` | Self: 0.0% (0us) | Total: 3.0% (10.1ms) | Samples: 0

**Called by:**
- `parseModule` (9)

**Calls:**
- `anonymous` (9)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-types/index.js:1` | Self: 0.0% (0us) | Total: 1.6% (5.5ms) | Samples: 0

**Called by:**
- `anonymous` (5)

**Calls:**
- `bound require` (5)

### `returnReply`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js:21` | Self: 0.0% (0us) | Total: 2.4% (8.1ms) | Samples: 0

**Called by:**
- `execute` (5)

**Calls:**
- `returnReply` (3)
- `returnReply` (1)
- `returnReply` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js:8` | Self: 0.0% (0us) | Total: 1.8% (6.3ms) | Samples: 0

**Called by:**
- `anonymous` (6)

**Calls:**
- `bound require` (6)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/connectors/SentinelConnector/index.js:11` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `anonymous` (1)

**Calls:**
- `bound require` (1)

### `bound onceWrapper`
`[native code]` | Self: 0.0% (0us) | Total: 4.9% (16.4ms) | Samples: 0

**Called by:**
- `emit` (4)

**Calls:**
- `(anonymous)` (1)
- `(anonymous)` (1)
- `(anonymous)` (1)
- `onceWrapper` (1)

### `bound afterConnectMultiple`
`[native code]` | Self: 0.0% (0us) | Total: 4.5% (15.2ms) | Samples: 0

**Called by:**
- `open` (3)

**Calls:**
- `afterConnectMultiple` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:306` | Self: 0.0% (0us) | Total: 0.3% (1.0ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `sendCommand` (1)

### `emitLookup`
`node:net:1022` | Self: 0.0% (0us) | Total: 0.6% (2.1ms) | Samples: 0

**Called by:**
- `(anonymous)` (1)

**Calls:**
- `internalConnectMultiple` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/cluster/ClusterSubscriber.js:3` | Self: 0.0% (0us) | Total: 0.9% (3.2ms) | Samples: 0

**Called by:**
- `anonymous` (3)

**Calls:**
- `bound require` (3)

### `connect`
`node:net:630` | Self: 0.0% (0us) | Total: 0.6% (2.3ms) | Samples: 0

**Called by:**
- `(anonymous)` (2)

**Calls:**
- `lookupAndConnect` (1)
- `lookupAndConnect` (1)

### `async runConcurrentRequests`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts:69` | Self: 0.0% (0us) | Total: 0.9% (3.2ms) | Samples: 0

**Called by:**
- `async runBenchmark` (2)
- `async runBenchmark` (1)

**Calls:**
- `async runConcurrentRequests` (3)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js:70` | Self: 0.0% (0us) | Total: 0.3% (1.1ms) | Samples: 0

**Called by:**
- `bound onceWrapper` (1)

**Calls:**
- `(anonymous)` (1)

### `(anonymous)`
`/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-errors/lib/modern.js:3` | Self: 0.0% (0us) | Total: 1.6% (5.5ms) | Samples: 0

**Called by:**
- `anonymous` (5)

**Calls:**
- `bound require` (5)

## Files

| Self% | Self | File |
|------:|-----:|------|
| 65.1% | 218.1ms | `[native code]` |
| 5.7% | 19.1ms | `internal:streams/readable` |
| 3.8% | 12.8ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/redis/event_handler.js` |
| 3.6% | 12.1ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Command.js` |
| 2.7% | 9.2ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Redis.js` |
| 2.7% | 9.2ms | `node:net` |
| 2.6% | 9.0ms | `internal:streams/writable` |
| 2.2% | 7.6ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/test/perf/benchmark.ts` |
| 1.6% | 5.6ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/Commander.js` |
| 1.2% | 4.0ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/persistence/redis_reporistory.ts` |
| 0.9% | 3.3ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/Script.js` |
| 0.6% | 2.3ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/debug/src/common.js` |
| 0.6% | 2.0ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/DataHandler.js` |
| 0.6% | 2.0ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/redis-parser/lib/parser.js` |
| 0.3% | 1.3ms | `node:os` |
| 0.3% | 1.2ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/autoPipelining.js` |
| 0.3% | 1.2ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg-protocol/dist/buffer-writer.js` |
| 0.3% | 1.2ms | `node:dns` |
| 0.3% | 1.2ms | `node:events` |
| 0.3% | 1.2ms | `internal:util/colors` |
| 0.3% | 1.1ms | `node:crypto` |
| 0.3% | 1.0ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/lodash.defaults/index.js` |
| 0.3% | 1.0ms | `internal:net/isIP` |
| 0.3% | 1.0ms | `node:url` |
| 0.3% | 1.0ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/pg/lib/stream.js` |
| 0.3% | 1.0ms | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/node_modules/ioredis/built/utils/index.js` |
| 0.2% | 1.0ms | `internal:primordials` |
| 0.2% | 996us | `/home/jeevan/projects/resume/Distributed-Rate-Limiter/src/service/acquire_service.ts` |
| 0.2% | 986us | `internal:validators` |
| 0.2% | 911us | `internal:util/inspect` |
