/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
  // input: a sorted array of integers, and a target value
  // output: an array of the indices of the values that add up to the target incremented by 1
  // constraints: space complexity must be O(1)
  // - only one solution
  // cannot use the same element twice
  

  // two pointer problem
  // left pointer at beginning,
  // right pointer at end
  // this is a sorted array so take advantage

  // if the sum > target, we can decrease the right pointer
  // if sum < target, we can increase left pointer
  // if sum === target, we return the indices + 1

  let l = 0; 
  let r = numbers.length - 1;

  while (l < r) {
    let sum = numbers[l] + numbers[r];

    if (sum > target) {
      r--;
    } else if (sum < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }

};

module.exports = twoSum;