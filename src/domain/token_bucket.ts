import { AcquireResultStatus } from './types';

export interface BucketState {
    tokens: number;
    lastRefillAt: number;
}

export interface TokenConsumptionResult {
    verdict: AcquireResultStatus;
    newTokens: number;
    newLastRefillAt: number;
    waitTimeMs: number;
}

/**
 * Pure function to calculate token consumption.
 * No side effects, no I/O.
 */
export function calculateTokenConsumption(
    currentState: BucketState,
    cost: number,
    nowMs: number,
    capacity: number,
    refillRate: number
): TokenConsumptionResult {
    const { tokens: currentTokens, lastRefillAt } = currentState;

    // 1. Refill Logic (Monotonicity Check)
    // If clock skew makes nowMs < lastRefill, we treat delta as 0.
    const deltaMs = Math.max(0, nowMs - lastRefillAt);
    const tokensToAdd = (deltaMs / 1000.0) * refillRate;
    const filledTokens = Math.min(capacity, currentTokens + tokensToAdd);

    // 2. Decision
    if (filledTokens >= cost) {
        return {
            verdict: AcquireResultStatus.ALLOWED,
            newTokens: filledTokens - cost,
            newLastRefillAt: nowMs,
            waitTimeMs: 0
        };
    } else {
        const deficit = cost - filledTokens;
        // Wait time: how long to generate 'deficit' tokens?
        const waitTimeMs = Math.ceil((deficit / refillRate) * 1000);

        // We DO NOT consume tokens on fail, but we DO commit the refill 
        // effectively advancing time to 'nowMs' and setting tokens to 'filledTokens'
        return {
            verdict: AcquireResultStatus.DENIED,
            newTokens: filledTokens,
            newLastRefillAt: nowMs,
            waitTimeMs
        };
    }
}
