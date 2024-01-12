function isPalindrome(s: string): boolean {
    if (s.length < 2) return true;

    const evalString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reverseString = evalString.slice(evalString.length / 2, evalString.length).split('').reverse()
    const forwardString = evalString.slice(0, evalString.length / 2).split('');

    if (forwardString.length > reverseString.length) forwardString.pop();
    if (reverseString.length > forwardString.length) reverseString.pop();

    return forwardString.join('') === reverseString.join('');
};