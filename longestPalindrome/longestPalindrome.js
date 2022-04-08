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
      if (s.length % 2 !== 0) {

      } else {
        // if s is even
      }

    }
};

module.exports = longestPalindrome;