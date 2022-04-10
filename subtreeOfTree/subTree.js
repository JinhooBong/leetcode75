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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
  // input: two trees
  // output: boolean value determining if subroot is a subtree of root

  // base case
  // if subroot is empty, it's automatically a subtree of any tree
  if(!subRoot) return true;

  // if subroot is a tree and root is null, return false
  if (!root) return false;

  // define helper fn that will determine if the two trees are the same
  let sameTree = (tree1, tree2) => {
    // if both trees are null, return true
    // if either one is null or the values dont match return false

    // recursively call on left and right and return the values of those combined

    if (!tree1 & !tree2) return true;
    if (!tree1 || !tree2 || tree1.val !== tree2.val) return false;

    return (sameTree(tree1.left, tree2.left) && sameTree(tree1.right, tree2.right));
  }

  // check to see if the current root and subtree are the same tree
  if (sameTree(root, subRoot)) return true;

  // else we can recursively call to check if the left or right tree are subtrees
  return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot));

};