/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  // use a set data strucutre as it checks for uniqueness of values
  // this is a sliding window pattern so we'll need two pointers
  // a variable to kepep track of length

  let charSet = new Set();
  let leftPointer = 0;
  let maxLength = 0;

  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[leftPointer]);
      leftPointer++;
    }
    charSet.add(s[r]);

    maxLength = maxLength > r - leftPointer + 1 ? maxLength : r - leftPointer + 1;
  }

  return maxLength; 
  
};

module.exports = lengthOfLongestSubstring;
