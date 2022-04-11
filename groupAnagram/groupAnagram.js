  /**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // input: an array of strings
  // output: an array of the strings that are anagrams of each other in arrays
  // time complexity: O (m * nlogn)
  // space complexity: O (n)

  // create a hash map
  // iterate through the array
  // grab the current word and then sort it
  // if the hashmap has a value at the current word key
  // then we simply append the current word to its array value
  // else
  // we create a new array and set that as the value

  let map = {};

  for (let word of strs) {
    let sorted = word.split("").sort().join("");

    if (map[sorted] !== undefined) {
      map[sorted].push(word);
    } else {
      map[sorted] = [word];
    }
  }

  return Object.values(map);
};