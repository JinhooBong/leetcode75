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
 * @return {number[]}
 */
 var rightSideView = function(root) {
  // input: root to a binary tree
  // output: only return the nodes that you can see from the right side

  // think of this as BFS problem
  // we want the rightmost node at each level

  // global result array

  // use a queue ds
  // while queue is not empty, 
  // we want to push the right most nodes value to our result array
  // then iterate through the current queue and pop it, while also pushing its children to the queue 

  if (!root) return [];

  let res = [];

  let queue = [root];

  while (queue.length > 0) {
    let currentQLength = queue.length;

    res.push(queue[currentQLength - 1].val);

    for (let i = 0; i < currentQLength; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right);
    }
  }

  return res;

};