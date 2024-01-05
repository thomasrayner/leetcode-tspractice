import { longestCommonPrefix } from "../src/index";

test ("given example 1", () => {
    const inp = ["flower","flow","flight"];
    const expected = "fl";
    expect(longestCommonPrefix(inp))
        .toBe(expected);
})


test ("given example 2", () => {
    const inp = ["dog", "racecar", "car"];
    const expected = "";
    expect(longestCommonPrefix(inp))
        .toBe(expected);
})

test ("given example 3", () => {
    const inp = ["ab", "a"];
    const expected = "a";
    expect(longestCommonPrefix(inp))
        .toBe(expected);
})