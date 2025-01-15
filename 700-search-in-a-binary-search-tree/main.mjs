import assert from 'node:assert/strict';

// You are given the root of a binary search tree (BST) and an integer val.
//
// Find the node in the BST that the node's value equals val and return the subtree rooted with
// that node. If such a node does not exist, return null.
//
// Example 1:
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
//
// Example 2:
// Input: root = [4,2,7,1,3], val = 5
// Output: []
//
// Constraints:
//  The number of nodes in the tree is in the range [1, 5000].
//  1 <= Node.val <= 10^7
//  root is a binary search tree.
//  1 <= val <= 10^7

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (root == null) {
    return null
  }

  if (root.val == val) {
    return root
  }

  if (root.val < val) {
    return searchBST(root.right, val)
  } else {
    return searchBST(root.left, val)
  }
};

const r1 = new TreeNode(4)
r1.left = new TreeNode(2)
r1.right = new TreeNode(7)

r1.left.left = new TreeNode(1)
r1.left.right = new TreeNode(3)

const e1 = new TreeNode(2)
e1.left = new TreeNode(1)
e1.right = new TreeNode(3)

assert.deepEqual(searchBST(r1, 2), e1)
assert.deepEqual(searchBST(r1, 5), null)
