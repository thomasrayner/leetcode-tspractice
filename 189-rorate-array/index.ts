/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let specialK = k % nums.length;
    let rem = nums.splice(nums.length - specialK, specialK);
    nums.unshift(...rem);
};