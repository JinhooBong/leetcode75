const validAnagram = require('./validAnagram');

describe('Longest Palindromic Substring', () => {

  it('Should be a function', () => {
    expect(typeof validAnagram).toBe('function');
  })

  it('Example 1', () => {
    expect(validAnagram("anagram", "nagaram")).toBe(true);
  })

  it('Example 2', () => {
    expect(validAnagram("rat", "car")).toBe(false);
  })


})