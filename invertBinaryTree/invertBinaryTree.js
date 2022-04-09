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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
   // input: a root to a binary tree
   // ouptut: the binary tree inverted
   // constraint: space complexity must be O(1)
   // edge case: if there's only children, or if the root is empty

   // if root is empty, we return null

   // we store the right child temporary
   // set the right child to recursively call on left child
   // set the left child to recursively call on right child
   
   // return root

   if (!root) {
     return null;
   }

   let temp = root.right;
   root.left = invertTree(root.right);
   root.right = invertTree(temp);

   return root;
  
};