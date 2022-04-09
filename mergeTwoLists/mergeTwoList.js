/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {

  // input: two linked lists in sorted order
  // output: a new linked list with the two lists merged
  // constraints: can't copy the lists, must use original nodes
  
  // time complexity: O(n)
  // space complexity: O(n);

  // we create a new linked list
  // we point a variable to that list

  // while list1 and list2 are valid
  // we check to see which of the two should come first
  // and then append it to our merged list
  // and shift our listheads to their respective next nodes

  // if list1 or list2 has more and the other doesn't
  // we can simply set the mergedlist next to the remaining node 

  let mergedList = new ListNode();
  let tail = mergedList;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }

    tail = tail.next;
  }

  tail.next = list1 || list2;

  return mergedList.next;

};