const validParen = require('./validParentheses');

describe('Valid parentheses', () => {

  it('Should be a function', () => {
    expect(typeof validParen).toBe('function');
  })

  it('Example 1', () => {
    expect(validParen("()")).toBe(true);
  })

  it('Example 2', () => {
    expect(validParen("()[]{}")).toBe(true);
  })

  it('Example 3', () => {
    expect(validParen("(]")).toBe(false);
  })

})