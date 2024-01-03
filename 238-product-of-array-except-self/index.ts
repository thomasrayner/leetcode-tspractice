function productExceptSelf(nums: number[]): number[] {
    let ret = new Array(nums.length).fill(1);
    let left = 1;
    let right = 1;

    for (let i = 0; i < nums.length; i++) {
        ret[i] *= left;
        ret[nums.length - i - 1] *= right;

        left *= nums[i];
        right *= nums[nums.length - i - 1];
    }

    return ret;
}