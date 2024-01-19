function lengthOfLongestSubstring(s: string): number {
    let max: number = 0;
    let map: Map<string, number> = new Map();
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        const c = s[r];

        if (map.has(c)) {
            l = Math.max(map.get(c)! + 1, l);
        }

        max = Math.max(max, r - l + 1);
        map.set(c, r);
    }

    return max;
};