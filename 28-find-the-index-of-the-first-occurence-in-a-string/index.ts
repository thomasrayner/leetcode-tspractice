function strStr(haystack: string, needle: string): number {
    if (needle.length === 0) return 0;
    if (haystack.length < needle.length) return -1;

    if (haystack.match(needle)) {
        return haystack.indexOf(needle);
    }
    return -1;
};