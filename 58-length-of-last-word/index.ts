function lengthOfLastWord(s: string): number {
    let r = s.split(" ").map(x => x.trim()).filter(x => x != "");
    return r[r.length - 1].length;
};