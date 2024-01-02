function majorityElement(nums: number[]): number {
    let seen = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        seen.set(nums[i], (seen.get(nums[i]) ?? 0) + 1);
    }

    return Array.from(seen.entries()).reduce((a, b) => a[1] < b[1] ? b : a)[0];
};
