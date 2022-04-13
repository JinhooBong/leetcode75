/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * 
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
 
  // input: two non-empty linked lists representing two non-negative integers
  // output: the sum of these two integers as a linked list
  // constraint: digits are stored in reverse order, each node containing a single digit
  // edge case: if both linkedlists are empty
  // if the linked lists are not the same length
  
  // we can iterate through both the linked lists
  // create a new linked list to store the sum value

  // if the sum of the current nodes are >=10, then we have to keep track to add 1 to the next node's sum

  // let l1Head = l1.val;
  // let l2Head = l2.val;

  // let sumHead = 0;


  let l1Head = l1[0];
  let l2Head = l2[0];
  
  let sumHead = [];

  let longerArr = Math.max(l1.length, l2.length);

  let addOne = false;

  // we iterate through the length of the longer arr
  for (let i = 0; i < longerArr; i++) {
    let sum = 0;
    if (l1[i] === undefined) {
      sum = 0 + l2[i];
    } else if (l2[i] === undefined) {
      sum = l1[i] + 0;
    } else {
      sum = l1[i] + l2[i];
    }
      
    if (addOne) {
      sum += 1;
    } 

    if (sum >= 10) {
      if (i === longerArr - 1) {
        sumHead.push(sum % 10);
        sumHead.push(1);  
      } else {
        sumHead.push(sum % 10);
        addOne = true;
      }
    } else {
      sumHead.push(sum);
      addOne = false;
    }

  }

  return sumHead;

  // let dummy = new ListNode();
  // let current = dummy;

  // let carry = 0;
  // while (l1 || l2 || carry) {
  //   let l1Val = 0;
  //   let l2Val = 0;

  //   if (l1) {
  //     l1Val = l1.val;
  //     l1 = l1.next;
  //   }

  //   if (l2) {
  //     l2Val = l2.val;
  //     l2 = l2.next;
  //   }

  //   // new listNode
  //   let sum = l1Val + l2Val + carry;
  //   carry = sum > 9 ? 1: 0;
  //   sum = sum % 10;
  //   current.next = new ListNode(sum);

  //   // update pointer
  //   current = current.next;
  // }

  // return dummy.next();
};

module.exports = addTwoNumbers;