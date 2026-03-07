# Build from repo root: docker build -f examples/rust/Dockerfile .
FROM rust:1.85-alpine AS builder
RUN apk add --no-cache musl-dev protobuf-dev
WORKDIR /app
COPY examples/rust/Cargo.toml examples/rust/Cargo.lock ./
COPY examples/rust/build.rs ./
COPY proto ./proto
RUN mkdir src && echo "fn main() {}" > src/main.rs
RUN cargo build --release
COPY examples/rust/src ./src
RUN touch src/main.rs && cargo build --release

FROM alpine:3.19
RUN apk add --no-cache ca-certificates
COPY --from=builder /app/target/release/payment-processor /usr/local/bin/
EXPOSE 8000
ENV RATE_LIMITER_ADDR=http://rate-limiter:50051
CMD ["payment-processor"]
