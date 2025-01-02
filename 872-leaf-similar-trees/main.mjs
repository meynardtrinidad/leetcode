import assert from 'node:assert/strict';

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * FIX: Slow runtime and high memory usage
 *
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const l1 = preorderTraversal(root1)
  const l2 = preorderTraversal(root2)

  if (l1.length != l2.length) {
    return false
  }

  for (let i = 0; i < l1.length; i++) {
    if (l1[i] != l2[i]) {
      return false
    }
  }

  return true
};

function preorderTraversal(root) {
  const st = []
  const ln = []
  let curr = root

  while (st.length > 0 || curr != null) {
    while (curr != null) {
      if (curr.right != null) {
        st.push(curr.right)
      }

      if (!curr.left && !curr.right) {
        ln.push(curr.val)
      }

      curr = curr.left
    }

    if (st.length > 0) {
      curr = st.pop()
    }
  }

  return ln
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const r1 = new TreeNode(3)
r1.left = new TreeNode(5)
r1.left.left = new TreeNode(6)
r1.left.right = new TreeNode(2)
r1.left.right.left = new TreeNode(7)
r1.left.right.right = new TreeNode(4)

r1.right = new TreeNode(1)
r1.right.left = new TreeNode(9)
r1.right.right = new TreeNode(8)

const r2 = new TreeNode(3)
r2.left = new TreeNode(5)
r2.left.left = new TreeNode(6)
r2.left.right = new TreeNode(7)

r2.right = new TreeNode(1)
r2.right.left = new TreeNode(4)
r2.right.right = new TreeNode(2)
r2.right.right.left = new TreeNode(9)
r2.right.right.right = new TreeNode(8)

const r3 = new TreeNode(1)
r3.left = new TreeNode(2)
r3.right = new TreeNode(3)

const r4 = new TreeNode(1)
r4.left = new TreeNode(3)
r4.right = new TreeNode(2)

assert.equal(leafSimilar(r1, r2), true)
assert.equal(leafSimilar(r3, r4), false)
