function isSubsequence(s: string, t: string): boolean {
    let si = 0;

    for (let ti = 0; ti < t.length; ti++) {
        if (t.charAt(ti) === s.charAt(si)) {
            si++;
        }
    }

    return si === s.length;
};
isSubsequence("this", "th")
