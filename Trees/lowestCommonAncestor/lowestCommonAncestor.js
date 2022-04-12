/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  // input: root value, p and q values
  // output: the lowest common ancestory
  // edge case: a node can be the descendant of itself

  // while we have a root node
  // if the p and q values are less than the current root node value
  // then we want to check the left binary subtree
  // if the p and q values are greater than the current root node value
  // then we want to check the right binary subtree
  // else this means that we've either reached the split or we've hit the node itself which automatically means it is the lowest common ancestor
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else {
      return root;
    }
  }
  
  
};