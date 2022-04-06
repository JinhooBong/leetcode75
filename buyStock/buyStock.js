/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * E.G.
 * prices = [7,1,5,3,6,4]
 * output: 5
 * 
 * prices = [7,6,4,3,1]
 * output: 0 bc/ it always decreases
 * 
 * @param {number[]} prices
 * @return {number}
 * 
 */
var maxProfit = function(prices) {

  // input: an array of prices
  //   prices[i] = price of stock
  //   i = day 
  // output: the maximum profit 
  // constraints: you can only sell after you buy (so selling day has to come after buying day)
  // edge case: there is no greater value after buying stock
  // if you cannot achieve profit, return 0

  // iterate through the prices array
  // grab each element and then the max value of the remaining array
  // if element is > max value, then return 0
  // else return max value - element

  let buyDay = 0;
  let sellDay = 1;

  let maxProfit = 0;

  while (sellDay < prices.length) {
    // check whether it's profitable
    if (prices[sellDay] > prices[buyDay]) {
      maxProfit = maxProfit > prices[sellDay] - prices[buyDay] ? maxProfit : prices[sellDay] - prices[buyDay]
    } else {
      buyDay = sellDay;
    }

    sellDay++;
  }

  return maxProfit;

};

module.exports = maxProfit;