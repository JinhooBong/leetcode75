
const addTwoNumbers = require('./addTwoNumbers');

describe('Add Two numbers', () => {
  it('Should be a function', () => {
    expect(typeof addTwoNumbers).toBe('function');
  })

  it('Example 1', () => {
    expect(addTwoNumbers([2, 4, 3], [5, 6, 4])).toStrictEqual([7, 0, 8]);
  })

  it('Example 2', () => {
    expect(addTwoNumbers([0],[0])).toStrictEqual([0]);
  })

  it('Example 3', () => {
    expect(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toStrictEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  })
})