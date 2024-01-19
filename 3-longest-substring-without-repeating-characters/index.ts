function lengthOfLongestSubstring(s: string): number {
    let max: number = 0;
    let map: Map<string, number> = new Map();
    let l = 0;

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (map.has(c)) {
            l = Math.max(map.get(c)! + 1, l);
        }

        max = Math.max(max, i - l + 1);
        map.set(c, i);
    }

    return max;
};