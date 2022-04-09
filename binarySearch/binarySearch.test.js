const binarySearch = require('./binarySearch');

describe('Binary Search', () => {

  it('Should be a function', () => {
    expect(typeof binarySearch).toBe('function');
  })

  it('Example 1', () => {
    expect(binarySearch([-1,0,3,5,9,12], 9)).toBe(4);
  })

  it('Example 2', () => {
    expect(binarySearch([-1,0,3,5,9,12], 2)).toBe(-1);
  })

})