function removeDuplicates(nums: number[]): number {
    let seen = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        seen.set(nums[i], (seen.get(nums[i]) ?? 0) + 1);

        // console.log("i: " + i + " val: " + nums[i] + " seen: " + seen.get(nums[i]));

        if (seen.get(nums[i]) > 2) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
};