import assert from 'node:assert/strict';

/**
 * FIX: Very slow runtime and inefficient memory usage.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const result = []
  const prefix = []
  const suffix = []

  for (let i = 0, j = nums.length - 1; i < nums.length && j >= 0; i++, j--) {
    let p1 = nums[i]
    let p2 = nums[j]

    if (i != 0) {
      p1 *= prefix[i - 1]
    }

    if (j != nums.length - 1) {
      p2 *= suffix[j + 1]
    }

    prefix[i] = p1
    suffix[j] = p2
  }

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      result.push(suffix[i + 1] == 0 ? 0 : suffix[i + 1])
      continue
    }

    if (i == nums.length - 1) {
      result.push(prefix[i - 1] == 0 ? 0 : prefix[i - 1])
      continue
    }

    let product = prefix[i - 1] * suffix[i + 1]
    result.push(product == 0 ? 0 : product)
  }

  return result
};

assert.deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6])
assert.deepEqual(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0])
assert.deepEqual(productExceptSelf([4, 3, 2, 1, 2]), [12, 16, 24, 48, 24])
