/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  // input: root to a binary tree
  // output: the maximum depth of a binary tree

  // recursive solution

  // if (!root) {
  //   return 0;
  // }

  // return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

  // use a stack that has objects with two values
  // the node itself and the depth

  let stack = [{root: root, depth: 1}];
  let maxDepthLength = 0;


  while(stack) {
    let node = stack.pop().root;
    let depth = stack.pop().depth;

    if (node) {
      maxDepthLength = Math.max(maxDepthLength, depth); 
      stack.push({root: node.left, depth: depth + 1});
      stack.push({root: node.right, depth: depth + 1})
    }
  }

  return maxDepthLength;

};