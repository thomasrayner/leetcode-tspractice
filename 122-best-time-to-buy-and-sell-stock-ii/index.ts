function maxProfit(prices: number[]): number {
    let max = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) {
            max += prices[i + 1] - prices[i];
        }
    }

    return max;
};