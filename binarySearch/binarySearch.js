/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {

  // input: an array of integers in sorted order, and a target value
  // output: the index at which the target exists, else - 1

  // constraints: must be solved in O(logn) time

  // we have two pointers l = 0, r = nums.length - 1
  // while our left pointer hasn't overlapped, 
  // we grab the middle index
  // if target > nums[middle], then we shift our left pointer to mid + 1
  // if target < nums[middle], then we shift our right pointer to mid - 1;
  // else we return the middle index bc we found our target
  // if our whole loop runs through and doesn't return, we return -1

  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);

    if (target > nums[mid]) {
      l = mid + 1;
    } else if (target < nums[mid]) {
      r = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
  
};

module.exports = search;