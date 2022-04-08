/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // this is another sliding window pattern type problem

    // input: a string
    // output: the longest palindromic substring  
    // constraints: has to be a substring (meaning contiguous)
    //  - has to be palindromic (meaning same backwards and forwards)
    // edge case: string is length 1

    // so the idea of checking for palindrome is by going inside out
    

    let result = "";
    let resultLength = 0;

    for (let i = 0; i < s.length; i++) {
      // if s is odd
        let leftOdd = i;
        let rightOdd = i;
        while ((leftOdd >= 0 && rightOdd < s.length) && s[leftOdd] === s[rightOdd]) {
          if ((rightOdd - leftOdd + 1) > resultLength) {
            result = s.substring(leftOdd, rightOdd + 1);
            resultLength = rightOdd - leftOdd + 1;
          }
          leftOdd -= 1;
          rightOdd += 1;
        }
        
        // if s is even
        let l = i;
        let r = i + 1;
        while ((l >= 0 && r < s.length) && s[l] === s[r]) {
          if ((r - l + 1) > resultLength) {
            result = s.substring(l, r + 1);
            resultLength = r - l + 1;
          }
          l -= 1;
          r += 1;
        }
    }

    return result;
};

module.exports = longestPalindrome;