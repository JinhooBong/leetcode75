/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  // stack type problem
  
  // input: a string with just () {} []
  // output: boolean value that determines whether it's valid or not
  // constraints: open brackets must be closed by same type
  // - brackets must be closed in the correct order
  
  // we use a stack
  // stack is LIFO
  
  // iterating through the string
  // base case : can't start with a closing bracket
  
  if (s[0] === ")" || s[0] === "}" || s[0] === "]") {
      return false;
  }
  
  let stack = [];
  let parenMap = {
      "{" : "}",
      "[": "]",
      "(": ")"
  };


  // we iterate through the string
  // if the current character is an opening bracket
  // we can then push the closing bracket into the stack
  // if the current character is a closing bracket
  // we check to see if the top of the stack is the same bracket
  // if it is, then we pop that bracket
  // if it's not, then we return false
  

  // if the stack is not empty, then return false


  for (let i in s) {
    // if its an opening bracket
    if (s[i] in parenMap) {
      stack.push(parenMap[s[i]]);
    } else {
      // its a closing bracket
      if (s[i] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0 ? true : false;
  
};

module.exports = isValid;