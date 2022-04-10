/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
  this.k = k;
  // sort the array 
  this.nums = nums.sort((a, b) => a - b)
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
  // add the value into the array and sort it
  this.nums.push(val);
  this.nums.sort((a,b) => a - b)
  
  return this.nums[this.nums.length - this.k]
};

/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/