const { validateCLIOptions } = require("jest-validate");

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  // two pointer question
  // base case: if s is empty, return true
  
  if (s.length === 0) {
      return true;
  }
  
  // convert all uppercase letters to lowercase
  // remove all non-alphanumeric characters
  // check to see if it reads the same forward and backwards
  
  // we can iterate through the string
  // create an array with all of the characters that are alphanumeric characters.
  
  let convertedString = "";
  
  for (let i in s) {
      // this checks to see if character is alphanumeric
      if ((/^[a-z0-9]+$/i).test(s[i])) {
          // if uppercase, we convert to lower
          convertedString += s[i].toLowerCase();
      }
  }
 
  return convertedString === convertedString.split("").reverse().join("");

  // // if it's odd, we can start from the end points until our two pointers match
  // if (convertedString.length % 2 !== 0) {
  //     let l = 0;
  //     let r = convertedString.length - 1;
      
  //     while (l !== r) {
  //         if (convertedString[l] !== convertedString[r]) {
  //             return false;
  //         }
  //         l++;
  //         r--;
  //     }
  // } else {
  //     let l = 0;
  //     let r = convertedString.length - 1;
      
  //     while (l < r) {
  //         if (convertedString[l] !== convertedString[r]) {
  //             return false;
  //         }
  //         l++;
  //         r--;
  //     }
  // }
  
  // return true;
};
module.exports = isPalindrome;