/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    // input: two arrays
    // output: binary tree
    
    // e.g. [3 9, 20, 15, 7], [9, 3, 15, 20, 7]

    // preorder lets us know what the root node is because it always is first
    // inorder lets us know what order left and right
    // e.g. 3 is the root node
    // we can find that index in the inorder
    // and identify that left subtree is 9
    // and right subtree is 15, 20, 7

    // so we can recursively build this tree by going down

    // base case 
    // if preorder is empty or inorder is empty, return null
    if (preorder.length === 0 || inorder.length === 0) return null;

    let root = new TreeNode(preorder[0]);

    let rootIndex = inorder.indexOf(root.val);

    root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
    root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));

    return root;
};