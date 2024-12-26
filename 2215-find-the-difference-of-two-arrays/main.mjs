import assert from 'node:assert/strict';

/**
 * FIXME: Slow runtime
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const result = [[], []]

  const s1 = new Set(nums1)
  const s2 = new Set(nums2)

  s1.forEach((v) => {
    if (!s2.has(v)) {
      result[0].push(v)
    }
  })

  s2.forEach((v) => {
    if (!s1.has(v)) {
      result[1].push(v)
    }
  })

  return result
};

assert.deepEqual(findDifference([1, 2, 3], [2, 4, 6]), [[1, 3], [4, 6]])
assert.deepEqual(findDifference([1, 2, 3, 3], [1, 1, 2, 2]), [[3], []])
