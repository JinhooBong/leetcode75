/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {

  // input: the head node of a linked list
  // output: the head node of the linked list in reverse order

  // we can use two pointers
  // start by one pointing to null
  // another pointing to the current head
  // while there is a node to iterate through
  // we store the current node's next value 
  // we set the current node's next value to previous
  // then we shift the pointers to the right
  // meaning previous becomes current
  // and current becomes what we stored earlier


  let prev = null;
  let current = head;

  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
  
 };