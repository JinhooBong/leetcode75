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

 var diameterOfBinaryTree = function(root) {

  // input: root of binary tree
  // output: length of the diameter of the tree
  // diameter of a binary tree is the length of the longest path  between any two nodes
  // length of a path between two nodes is represented by the number of edges between them

  // it looks like we're adding the lengths from both the left and the right

  // base case: if root is not a tree, we return 0

  // as we climb the tree back up, we add the max of the left and the max of the right 

  // we're going to implement a recursive dfs fn

  if (!root) return 0;

  let length = 0;

  let dfs = (node) => {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    length = Math.max(length, left + right);

    return 1 + Math.max(left, right);
  }

  dfs(root);
  return length;

};