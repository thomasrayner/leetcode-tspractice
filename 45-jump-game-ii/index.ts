function jump(nums: number[]): number {
    let jumps = 0;
    let available = 0;
    let current = 0;

    if (nums.length == 1) {
        return 0;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums.length - 1 <= i + nums[i]) {
            // we can reach the end from here
            return jumps + 1;
        }

        available = Math.max(available, i + nums[i]);

        if (i === current) {
            jumps++;
            current = available;
        }
    }

    return jumps;
};