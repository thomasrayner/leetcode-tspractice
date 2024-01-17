function minSubArrayLen(target: number, nums: number[]): number {
    let minLen = Infinity;
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        target -= nums[i];

        while (target <= 0) {
            minLen = Math.min(minLen, i - left + 1);
            target += nums[left++];
        }
    }

    return minLen === Infinity ? 0 : minLen;
};