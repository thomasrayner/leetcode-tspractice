function threeSum(nums: number[]): number[][] {
    let result: number[][] = [];

    let n = nums.sort((a, b) => a - b);

    for (let i = 0; i < n.length; i++) {
        if (i > 0 && n[i-1] === n[i]) continue;

        let l = i + 1;
        let r = n.length - 1;

        while (l < r) {
            let sum = n[i] + n[l] + n[r];

            if (sum < 0) {
                l++;
            }
            else if (sum > 0) {
                r--;
            }
            else {
                result.push([n[i], n[l], n[r]]);

                l++;
                while (n[l] === n[l - 1]) l++;

                r--;
                while (n[r] === n[r + 1]) r--;
            }
        }
    }

    return result;
};