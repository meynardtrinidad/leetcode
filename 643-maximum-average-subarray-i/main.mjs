import assert from 'node:assert/strict';

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let maxSum = 0
  for (let i = 0; i < k; i++) {
    maxSum += nums[i]
  }

  let currSum = maxSum
  for (let i = k; i < nums.length; i++) {
    currSum += nums[i] - nums[i - k]
    maxSum = Math.max(currSum, maxSum)
  }

  return maxSum / k
};

assert.equal(findMaxAverage([1, 12, -5, -6, 50, 3], 4), 12.75)
assert.equal(findMaxAverage([5], 1), 5)
assert.equal(findMaxAverage([-1], 1), -1)
