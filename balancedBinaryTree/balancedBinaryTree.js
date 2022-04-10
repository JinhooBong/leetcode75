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
 * @return {boolean}
 */
 var isBalanced = function(root) {

  // input: root to a binary tree
  // output: boolean value determining if tree is height balanced
  
  // our approach is to build it from the bottom up instead of going top down

  // a tree node without any children is automatically height balanced
  // we're going to return two values to keep track of whether this level of the tree is balanced, and the height of the tree
  // this way, if we ever run into an unbalanced PART of the tree, we return false
  // and we can calculate the difference between the heights of the tree

  // we can recursively dfs this tree
  // base case: if !node then return [true, 0]

  let dfs = (node) => {
    if (!node) return [true, 0];

    let left = dfs(node.left); // going to return [t/f, x];
    let right = dfs(node.right); // ^

    // check if this current level of the tree is balanced
    // check to see if the left and right trees are balanced by accessing their boolean variable
    let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [balanced, 1 + Math.max(left[1], right[1])];
  }

  return dfs(root)[0];

};