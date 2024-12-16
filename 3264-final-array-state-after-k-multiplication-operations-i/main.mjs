import assert from 'node:assert/strict';

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
const getFinalState = function(nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    let min = 0

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j
      }
    }

    nums[min] = nums[min] * multiplier
  }

  return nums
}

assert.deepEqual(getFinalState([2, 1, 3, 5, 6], 5, 2), [8, 4, 6, 5, 6])
assert.deepEqual(getFinalState([1, 2], 3, 4), [16, 8])
