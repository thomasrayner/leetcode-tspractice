function maxProfit(prices: number[]): number {
    let low = Number.MAX_SAFE_INTEGER;
    let high = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < low) {
            low = prices[i];
        }
        else {
            high = Math.max(high, prices[i] - low);
        }
    }

    return high;
};