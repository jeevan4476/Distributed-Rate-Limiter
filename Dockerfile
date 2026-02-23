FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

EXPOSE 50051

CMD ["bun", "run", "src/cmd/server.ts"]
