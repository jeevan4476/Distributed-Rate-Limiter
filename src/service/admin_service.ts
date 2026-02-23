import { Pool } from "pg";

export class AdminService {
    constructor(
        private pool: Pool,
        private backend: string
    ) {}
    async resetBucket(key: string): Promise<number> {
        const client = await this.pool.connect();
        try {
            const res = await client.query(
                `UPDATE rate_limit_buckets
                 SET tokens = capacity, last_refill_at = NOW()
                 WHERE key = $1
                 RETURNING tokens`,
                [key]
            );
            if (res.rows.length === 0) throw new Error(`Bucket not found: ${key}`);
            return parseFloat(res.rows[0].tokens);
        } finally {
            client.release();
        }
    }
    async getBucketStats(key: string) {
        const client = await this.pool.connect();
        try {
            const res = await client.query(
                `SELECT key, tokens, capacity, refill_rate
                 FROM rate_limit_buckets WHERE key = $1`,
                [key]
            );
            if (res.rows.length === 0) throw new Error(`Bucket not found: ${key}`);
            const row = res.rows[0];
            return {
                key: row.key,
                tokens: parseFloat(row.tokens),
                capacity: parseFloat(row.capacity),
                refillRate: parseFloat(row.refill_rate),
                fillPercent: (parseFloat(row.tokens) / parseFloat(row.capacity)) * 100
            };
        } finally {
            client.release();
        }
    }

    async listBuckets() {
        if (this.backend === 'redis') return [];  // Redis keys are ephemeral
        const client = await this.pool.connect();
        try {
            const res = await client.query(
                `SELECT key, tokens, capacity, refill_rate FROM rate_limit_buckets`
            );
            return res.rows.map(row => ({
                key: row.key,
                tokens: parseFloat(row.tokens),
                capacity: parseFloat(row.capacity),
                refillRate: parseFloat(row.refill_rate),
                fillPercent: (parseFloat(row.tokens) / parseFloat(row.capacity)) * 100
            }));
        } finally {
            client.release();
        }
    }
}