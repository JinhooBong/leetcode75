const isPalindrome = require('./validPalindrome');

describe('Is Valid Palindrome?', () => {

  it('Should be a function', () => {
    expect(typeof isPalindrome).toBe('function');
  })

  it('Example 1', () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  })

  it('Example 2', () => {
    expect(isPalindrome("race a car")).toBe(false);
  })

  it('Example 3', () => {
    expect(isPalindrome(" ")).toBe(true);
  })

})