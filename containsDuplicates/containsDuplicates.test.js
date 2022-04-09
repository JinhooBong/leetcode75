const containsDuplicates = require('./containsDuplicates');

describe('Longest Palindromic Substring', () => {

  it('Should be a function', () => {
    expect(typeof containsDuplicates).toBe('function');
  })

  it('Example 1', () => {
    expect(containsDuplicates([1, 2, 3, 1])).toBe(true);
  })

  it('Example 2', () => {
    expect(containsDuplicates([1, 2, 3, 4])).toBe(false);
  })

  it('Example 3', () => {
    expect(containsDuplicates([1,1,1,3,3,4,3,2,4,2])).toBe(true);
  })

})