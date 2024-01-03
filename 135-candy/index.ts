function candy(ratings: number[]): number {
    let weightedRatings: number[][] = ratings.map((r, i) => [r, i]).sort((a, b) => a[0] - b[0]);
    let assigned = new Array(ratings.length).fill(0);
    let givenCandy = 0;

    for (let [r, i] of weightedRatings) {
        let lr = ratings[i - 1] ?? Number.MAX_SAFE_INTEGER;
        let rr = ratings[i + 1] ?? Number.MAX_SAFE_INTEGER;

        let lmin = lr < r ? assigned[i - 1] : 0;
        let rmin = rr < r ? assigned[i + 1] : 0;
        let min = Math.max(lmin, rmin) + 1;
        assigned[i] = min;
        givenCandy += min;
    }

    return givenCandy;
};