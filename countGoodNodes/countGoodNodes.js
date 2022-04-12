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
 var goodNodes = function(root) {
  // input: root to binary tree
  // output: number of "good" nodes in the binary tree
  // constraint: a node is good if from root to X node, there is no greater value than X
  
  // we can try a DFS approach
  

  // at each node, we want to pass in some maxval
  // so that we can identify if the current node is greater than or equal to the max value in that path

  // then we want to add the results of the left and right subtrees

  let dfs = (node, maxVal) => {

    // base case
    if (!node) return 0;

    let res = node.val >= maxVal ? 1 : 0;

    maxVal = node.val > maxVal ? node.val : maxVal;

    res += dfs(node.left, maxVal);
    res += dfs(node.right, maxVal);

    return res;
  }

  return dfs(root, root.val);


};