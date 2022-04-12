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
 var isValidBST = function(root) {
  // input: root
  // output: boolean value determining if this tree is binary tree

  // recursive dfs

  // we want to play with the range of the possible values for each node
  // for the root node, it can be anything so between -inf and inf

  // for the left child, the range now gets changed to -inf to the root val
  // for the right child, the range changes to root.val to inf
  // if the node value is ever not within the specified range, then its false

  let validBST = (node, left, right) => {

    // base case : if node is null, return true bc null tree is technically BST
    if (!node) return true;

    // if the node value is not within the range
    if (!(left < node.val && node.val < right)) {
      return false;
    } 

    return (validBST(node.left, left, node.val) &&
            validBST(node.right, node.val, right));
  } 

  return validBST(root, Number.NEGATIVE_INFINITY, Infinity);
};