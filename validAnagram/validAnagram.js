/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    
  // input: two strings, s, and t
  // output: boolean value determing if t is an anagram of s
  
  // an anagram means that both strings will contain the same letters the same number of times
  // location of the letter doesn't necessarily matter but rather the existence of such letters
  
  // question here is which data structure should we use??
  
  // we can create an object and store the number of times each letter appears within the string s
  // then we can iterate through t and check whether each letter coincides with the object s
  
  // base case can be that if the lengths are different, we return false immediately
  if (s.length !== t.length) {
      return false;
  }
  
  let sMap = {};
  let tMap = {};
  
  for (let i in s) {
      if (sMap[s[i]] === undefined) {
          sMap[s[i]] = 1;
      } else {
          sMap[s[i]]++;
      }
      
      if (tMap[t[i]] === undefined) {
          tMap[t[i]] = 1;
      } else {
          tMap[t[i]]++;
      }
  }
      
  for (let letters in sMap) {
      // check if the letter exists in tObj
      if (tMap[letters] === undefined) {
          return false;
      } else {
          // this means letter exists, now we check value (# of times)
          if (tMap[letters] !== sMap[letters]) {
              return false;
          }
      }
  }
  
  return true;
  
};

module.exports = isAnagram;