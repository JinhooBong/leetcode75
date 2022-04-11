/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {

  // input: an integer array
  // output: an array that stores the product of all the values except the corresponding current element

  // constraint: must be done in O(n) time
  // memory: we can use the returning array so O(1)

  // the idea is that we can iterate through the array twice to save time

  // the product of the current value in this case would be the product of all the values before times the product of all the values after

  // create a new array
  let productArr = new Array(nums.length).fill(1);

  let preProduct = 1;
  let postProduct = 1;

  // first iteration from left to right 
  for (let i = 0; i < nums.length; i++) {
    productArr[i] = preProduct;
    preProduct *= nums[i];
  }

  // second iteration from right to left
  for (let i = nums.length - 1; i >= 0; i--) {
    productArr[i] *= postProduct;
    postProduct *= nums[i];
  }

  return productArr;

};