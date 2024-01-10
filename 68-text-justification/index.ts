function fullJustify(words: string[], maxWidth: number): string[] {
    let result = [];
    let row = [];
    let rowLength = 0;

    while (words.length > 0) {
        let amount = rowLength === 0 ? words[0].length : words[0].length + 1;

        if (rowLength + amount <= maxWidth) {
            rowLength += amount;
            row.push(words.shift());
        }
        else {
            let i = 0;

            while (rowLength < maxWidth) {
                row[i] += ' ';
                rowLength++;

                if (rowLength > 2) {
                    i = i + 1 < row.length - 1 ? i + 1 : 0;
                }
            }
        }

        if (rowLength === maxWidth) {
            result.push(row.join(' '));
            rowLength = 0;
            row = [];
        }
    }

    if (row.length > 0) {
        let last = row.join(' ');

        while (last.length < maxWidth) {
            last += ' ';
        }

        result.push(last);
    }

    return result;
};