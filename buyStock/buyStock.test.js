
const maxProfit = require('./buyStock');

describe('Max Profit', () => {
  it('Should be a function', () => {
    expect(typeof maxProfit).toBe('function');
  })

  it('Example 1', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  })

  it('Example 2', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  })
})