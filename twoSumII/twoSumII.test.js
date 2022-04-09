
const twoSum = require('./twoSumII');

describe('Two Sum II', () => {
  it('should be a function', () => {
    expect(typeof twoSum).toBe('function');
  })

  it('Example 1', () => {
    expect(twoSum([2,7,11,15], 9)).toStrictEqual([1, 2]);
  })

  it('Example 2', () => {
    expect(twoSum([2,3,4], 6)).toStrictEqual([1, 3]);
  })

  it('Example 3', () => {
    expect(twoSum([-1, 0], -1)).toStrictEqual([1,2]);
  })
})