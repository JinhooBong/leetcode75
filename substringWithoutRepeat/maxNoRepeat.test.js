const maxNoRepeat = require('./maxNoRepeat');

describe('Longest Substring without Repeating Characters', () => {

  it('Should be a function', () => {
    expect(typeof maxNoRepeat).toBe('function');
  })

  it('Example 1', () => {
    expect(maxNoRepeat('abcabcbb')).toBe(3);
  })

  it('Example 2', () => {
    expect(maxNoRepeat('bbbb')).toBe(1);
  })

  it('Example 3', () => {
    expect(maxNoRepeat('pwwkew')).toBe(3);
  })

})