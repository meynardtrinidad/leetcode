import assert from "node:assert/strict";

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
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
// var deleteMiddle = function (head) {
//   let length = 0;
//   let curr = head;
//
//   while (curr != null) {
//     curr = curr.next;
//     length++;
//   }
//
//   let i = 0;
//   let m = Math.floor(length / 2);
//
//   if (m == 0) {
//     return null;
//   }
//
//   curr = head;
//   while (i < m) {
//     if (i == m - 1) {
//       let next = curr.next.next;
//       curr.next = next;
//       return head;
//     }
//
//     curr = curr.next;
//     i++;
//   }
//
//   return head;
// };

// NOTE: Turtle and hare algorithm
var deleteMiddle = function (head) {
  let hare = head;
  let turtle = head;
  let prev = null;

  while (hare != null && hare.next != null) {
    prev = turtle;
    turtle = turtle.next;
    hare = hare.next.next;
  }

  if (prev == null) return null;

  prev.next = turtle.next;
  turtle.next = null;

  return head;
};

const l1 = new ListNode(1);
l1.next = new ListNode(3);
l1.next.next = new ListNode(4);
l1.next.next.next = new ListNode(7);
l1.next.next.next.next = new ListNode(1);
l1.next.next.next.next.next = new ListNode(2);
l1.next.next.next.next.next.next = new ListNode(6);

const e1 = new ListNode(1);
e1.next = new ListNode(3);
e1.next.next = new ListNode(4);
e1.next.next.next = new ListNode(1);
e1.next.next.next.next = new ListNode(2);
e1.next.next.next.next.next = new ListNode(6);

assert.deepEqual(deleteMiddle(l1), e1);

const l2 = new ListNode(1);
const e2 = new ListNode(null);

assert.deepEqual(deleteMiddle(l2), null);
