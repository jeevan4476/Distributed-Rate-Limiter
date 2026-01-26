# Use the official Bun image
FROM oven/bun:1

WORKDIR /app

# Copy package.json and bun.lockb
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Expose the port (example 50051 for gRPC)
EXPOSE 50051

# Start the server
CMD ["bun", "run", "src/cmd/server.ts"]
