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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  // input: root node
  // output: the level order traversal of the nodes values (left to right, top to bottom)

  // if root is empty, return []

  // this is a BFS problem
  // we're going to use a queue to keep track

  let queue = [root];

  // while our queue is not empty, 
  // we want to grab the first element, push it into an array
  // and if it has children, add the children to the queue

  let levelOrderArr = [];

  while (queue.length > 0) {
    let levelArr = [];
    let currentQueueLength = queue.length;

    for (let i = 0; i < currentQueueLength; i++) {
      let node = queue.shift();
      levelArr.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    levelOrderArr.push(levelArr);
  }

  return levelOrderArr;


};