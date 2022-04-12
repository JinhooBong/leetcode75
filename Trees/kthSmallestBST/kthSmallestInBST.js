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
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
  // input: root of binary tree, and a value k 
  // output: the kth smallest value in the binary tree

  // bc its binary tree, we know that all values in left subtree will be smaller than right
  // and likewise, right subtree is greater than 

  // recursively solve this by creating a dfs function
  // base case: if current node is null, then just return
  // then we'll call it on the left subtree, 
  // then push current node value to a global array
  // then call it on right subtree
  // this way, the array is stored in order
  // and we can return array[k] value

  let values = [];

  let dfs = (node) => {
    if (!node) return;

    if (node.left) dfs(node.left);
    values.push(node.val);
    if (node.right) dfs(node.right);
  }

  dfs(root);

  return values[k];



  

};