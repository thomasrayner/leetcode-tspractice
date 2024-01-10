function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;

    let rows = new Array(numRows).fill('');
    let goingDown = false;

    for (let i = 0, j = 0; i < s.length; i++) {
        rows[j] += s[i];

        if (j === 0 || j === numRows - 1) goingDown = !goingDown;

        j += goingDown ? 1 : -1;
    }

    return rows.join('');
};