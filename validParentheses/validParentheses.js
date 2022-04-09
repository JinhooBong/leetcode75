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
  let paranthesesMatchMap = {
      "{" : "}",
      "[": "]",
      "(": ")"
  };
  
  // iterate through the string
  // if we find an opening bracket, we push the closing bracket into the stack
  // when we run into a closing bracket, we see if the top of the stack is that same bracket
  // if so, then we pop that stack
  // if not, then we have an invalid string automaticlaly
  
  
  
  
};