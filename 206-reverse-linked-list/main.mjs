import assert from 'node:assert/strict';

// Given the head of a singly linked list, reverse the list, and return the reversed list.
//
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
//
// Example 2:
// Input: head = [1,2]
// Output: [2,1]
//
// Example 3:
// Input: head = []
// Output: []
//
// Constraints:
//  The number of nodes in the list is the range [0, 5000].
//  -5000 <= Node.val <= 5000
//
// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

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
  if (!head) {
    return head
  }

  const s = []
  let curr = head

  while (curr != null) {
    s.push(curr)
    curr = curr.next
  }


  const node = s.pop()
  curr = node
  while (s.length > 0 && curr) {
    let next = s.pop()
    next.next = null
    curr.next = next
    curr = next
  }

  return node
};

const l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(4)
l1.next.next.next.next = new ListNode(5)
const e1 = new ListNode(5)
e1.next = new ListNode(4)
e1.next.next = new ListNode(3)
e1.next.next.next = new ListNode(2)
e1.next.next.next.next = new ListNode(1)

const l2 = new ListNode(1)
l2.next = new ListNode(2)
const e2 = new ListNode(2)
e2.next = new ListNode(1)

const l3 = new ListNode()
const e3 = new ListNode()

const l4 = new ListNode(0)
l4.next = new ListNode(1)
l4.next.next = new ListNode(4)
l4.next.next.next = new ListNode(-2)
const e4 = new ListNode(-2)
e4.next = new ListNode(4)
e4.next.next = new ListNode(1)
e4.next.next.next = new ListNode(0)

assert.deepEqual(reverseList(l1), e1)
assert.deepEqual(reverseList(l2), e2)
assert.deepEqual(reverseList(l3), e3)
assert.deepEqual(reverseList(l4), e4)
