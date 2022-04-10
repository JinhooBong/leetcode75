/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
  // inputs: roots to two binary trees
  // output: boolean value to check whether trees are identical

  // we have a couple base cases
  // if both trees are null, we can return true;
  // if one of them is null while the other is not, we can return false
  // if the values aren't equal, we can also return false;

  // then we want to recursively call this function on the left and right children
  // and simply return whether BOTH are true

  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
  
};