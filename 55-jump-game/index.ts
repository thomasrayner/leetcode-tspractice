function canJump(nums: number[]): boolean {
    let location = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] + i >= location) {
            location = i;
        }
    }

    return location === 0;
};