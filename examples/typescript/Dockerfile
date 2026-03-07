# Build from repo root: docker build -f examples/typescript/Dockerfile .
FROM oven/bun:1 AS builder
WORKDIR /app
COPY examples/typescript/package.json examples/typescript/bun.lock ./
RUN bun install --frozen-lockfile
COPY examples/typescript/src ./src
COPY examples/typescript/tsconfig.json ./
COPY proto ./proto

FROM oven/bun:1-slim
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
ENV RATE_LIMITER_ADDR=rate-limiter:50051
CMD ["bun", "run", "src/index.ts"]
