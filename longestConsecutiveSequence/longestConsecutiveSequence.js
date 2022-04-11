/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
  // input: an unsorted array of integers
  // output: length of the longest consecutive element sequence
  // constraint: must be done in O(n) time

  // we can create a set to store each value of the array
  // this way we can access each element in O(1) time
  
  // we iterate through the array
  // we can identify a consecutive sequence by checking to see if the current element has a left value (meaning does our set contain the current element - 1 value)
  // if it's the start, then while our set contains the next consecutive value, we can increment the length
  // if not, then we can just skip it

  let set = new Set();
  let longestLength = 0;

  for (let n of nums) {
    set.add(n);
  }

  for (let num of nums) {
    // if set doesn't contain the current element value - 1
    // we've identified the start of a sequence
    if (!set.has(num - 1)) {
      let length = 0;
      while (set.has(num + length)) {
        length++;
      }
      longestLength = length > longestLength ? length : longestLength;
    } 
  }

  return longestLength;

  
};