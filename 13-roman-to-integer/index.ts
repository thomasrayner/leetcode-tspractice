function romanToInt(s: string): number {
    let ret = 0;
    let map = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);

    let ints = s.split('').map(c => map.get(c) || 0);
    ret = ints.reduce((acc, cur, i) => cur < ints[i + 1] ? acc - cur : acc + cur, 0);

    return ret;
};