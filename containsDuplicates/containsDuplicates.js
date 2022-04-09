/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  
  // input : an integer array nums
  // output: a boolean value that depicts whether a value appears at least twice in the array
  
  // use a set data structure
  // we can iterate through the input array,
  // if it's not found in the array, we can simply move on, 
  // if it's found in the array, we can return true
  // else we return false if we've reached the end of the array without returning true
  
//     let numSet = new Set();
  
//     for (let num of nums) {
//         if (numSet.has(num)) {
//             return true;
//         } else {
//             numSet.add(num);
//         }
//     }
  
//     return false;
  
  let numSet = new Set(nums);
  
  // if this returns true that means that the nums length is longer bc it contains duplicates
  // else it would return false meaning that the set contains unique values 1:1 with the array
  return (numSet.size !== nums.length);
  
};

module.exports = containsDuplicate;