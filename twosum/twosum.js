/**
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * E.G
 * input: nums = [2,7,11,15], target = 9
 * output: [0,1]
 */
var twoSum = function(nums, target) {

  // input: array of numbers, num / integer target, target
  // output: an array that stores the indices of the two numbers that add up to target
  // constraint: exactly one solution in array
  //        - may not use the same element twice
  // edge case: if array nums has only one number

  // create an array variable to store the indices of the two numbers
  // for (let i = 0; i < nums.length - 1; i++) {
  //    for (let j = i + 1; j < nums.length; j++) {}

  // if any element is greater than the target, then we don't have to worry about testing it

  // if i + j === target, then we push i & j into our array variable

  // return array variable

  let indiceArr = [];

  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
            indiceArr.push(i);
            indiceArr.push(j);
          }
        }
  }

  return indiceArr;

};

module.exports = twoSum;