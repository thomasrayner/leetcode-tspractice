export function longestCommonPrefix(strs: string[]): string {
    let outp = strs.sort((a, b) => a.length - b.length)[0];

    for (let i = 0; i < strs.length; i++) {
        let curpre = "";
        for (let j = 0; j < strs[i].length; j++) {
            if (outp[j] === strs[i][j]) {
                // prefix intact
                curpre += outp[j];
            }
            else {
                // no match
                outp = curpre;
            }
        }
    }

    return outp;
};