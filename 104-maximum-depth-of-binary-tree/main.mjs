import assert from 'node:assert/strict';

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
 * @return {number}
 */
var maxDepth = function(root) {
  if (root == null) {
    return 0
  }

  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  return Math.max(left, right) + 1
};

const r1 = new TreeNode(3)
r1.left = new TreeNode(9)
r1.right = new TreeNode(20)
r1.right.left = new TreeNode(15)
r1.right.right = new TreeNode(7)

const r2 = new TreeNode(1)
r2.left = new TreeNode(2)

assert.equal(maxDepth(r1), 3)
assert.equal(maxDepth(r2), 2)
