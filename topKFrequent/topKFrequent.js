/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  // input: an array of nums, and an integer k 
  // outuput: an array of the top k most frequent elements

  // we can use a map to keep track of how many times each element appears
  let map = {};

  for (let num of nums) {
    if (map[num] === undefined) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }
  //


  // then we can create an array where the indices are the frequencies
  // and the values are the actual element 
  let freq = new Array(nums.length).fill([]);

  // as we iterate through the map
  for (let key in map) {
    // if our frequency array at frequency is empty
    if (freq[map[key]].length === 0) {
      // then we set that position at the frequency array to an array with the corresponding element
      freq[map[key]] = [key];
    } else {
      // else we simply push the corresponding element 
      freq[map[key]].push(key);
    }
  }  
  
  // then we return the top k elements
  let res = [];

  // then iterating through our frequency array backwards, we can grab the elements of the top k most frequently appearing 
  // and then return those
  for (let i = freq.length; i >= 0; i--){
    for (let j in freq[i]) {
      res.push(j);
      if (res.length === k) {
        return res;
      }
    }
  }
  
};