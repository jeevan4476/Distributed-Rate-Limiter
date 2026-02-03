
import { describe, expect, test } from "bun:test";
import { calculateTokenConsumption, BucketState } from "../../domain/token_bucket";
import { AcquireResultStatus } from "../../domain/types";

describe("TokenBucket Domain Logic", () => {

    test("Refill Logic: Should add tokens based on time elapsed", () => {
        const startState: BucketState = { tokens: 5, lastRefillAt: 1000 };
        const now = 2000; // 1s later
        const capacity = 10;
        const refillRate = 2; // 2 tokens/sec

        // Expected: 5 initial + 2 (1s * 2/s) = 7. cost 1 -> 6 remaining
        const result = calculateTokenConsumption(startState, 1, now, capacity, refillRate);

        expect(result.verdict).toBe(AcquireResultStatus.ALLOWED);
        expect(result.newTokens).toBeCloseTo(6, 5);
        expect(result.newLastRefillAt).toBe(now);
    });

    test("Capacity Cap: Should not exceed capacity", () => {
        const startState: BucketState = { tokens: 9, lastRefillAt: 1000 };
        const now = 5000; // 4s later, should add 8 tokens -> 17 total -> cap at 10
        const capacity = 10;
        const refillRate = 2;

        const result = calculateTokenConsumption(startState, 1, now, capacity, refillRate);

        expect(result.verdict).toBe(AcquireResultStatus.ALLOWED);
        expect(result.newTokens).toBeCloseTo(9, 5); // 10 - 1 = 9
    });

    test("Consumption: Should deny if insufficient tokens", () => {
        const startState: BucketState = { tokens: 1, lastRefillAt: 1000 };
        const now = 1100; // 0.1s later -> +0.2 tokens -> 1.2 total
        const capacity = 10;
        const refillRate = 2;
        const cost = 5;

        // Want 5, have 1.2. Deficit 3.8.
        // Wait time = 3.8 / 2 * 1000 = 1900ms
        const result = calculateTokenConsumption(startState, cost, now, capacity, refillRate);

        expect(result.verdict).toBe(AcquireResultStatus.DENIED);
        expect(result.newTokens).toBeCloseTo(1.2, 5); // Consumed none, but refilled
        expect(result.waitTimeMs).toBeGreaterThan(0);
        expect(result.waitTimeMs).toBeCloseTo(1900, -1); // Allow slight rounding diffs
    });

    test("Edge Case: Zero time elapsed", () => {
        const startState: BucketState = { tokens: 5, lastRefillAt: 1000 };
        const now = 1000;
        const capacity = 10;
        const refillRate = 2;

        const result = calculateTokenConsumption(startState, 1, now, capacity, refillRate);
        expect(result.verdict).toBe(AcquireResultStatus.ALLOWED);
        expect(result.newTokens).toBe(4);
    });

    test("Edge Case: Clock skew (Time went backwards)", () => {
        const startState: BucketState = { tokens: 5, lastRefillAt: 2000 };
        const now = 1000; // backwards
        const capacity = 10;
        const refillRate = 2;

        // Should treat delta as 0, no refill
        const result = calculateTokenConsumption(startState, 1, now, capacity, refillRate);
        expect(result.verdict).toBe(AcquireResultStatus.ALLOWED);
        expect(result.newTokens).toBe(4);
        // Note: Logic in token_bucket.ts sets newLastRefillAt to `now`.
        // If time went backward, we might be resetting refiller. 
        // Current impl: newLastRefillAt: nowMs (1000). 
        // This is acceptable/safe fallback for monotonic clock violations.
        expect(result.newLastRefillAt).toBe(1000);
    });
});
