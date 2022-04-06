
const twoSum = require('./twosum');

describe('TwoSum', () => {
  it('Should be a function', () => {
    expect(typeof twoSum).toBe('function');
  });

  it('Example 1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });

  it('Example 2', () => {
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
  })

  it('Example 3', () => {
    expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
  })

  it('Example 4', () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toStrictEqual([0, 2])
  })
});