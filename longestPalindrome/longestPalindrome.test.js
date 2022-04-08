const longestPalindrome = require('./longestPalindrome');

describe('Longest Palindromic Substring', () => {

  it('Should be a function', () => {
    expect(typeof longestPalindrome).toBe('function');
  })

  it('Example 1', () => {
    expect(longestPalindrome("babad")).toStrictEqual("bab");
  })

  it('Example 2', () => {
    expect(longestPalindrome("cbbd")).toBe("bb");
  })

  it('Example 3', () => {
    expect(longestPalindrome("ac")).toBe("a");
  })

})