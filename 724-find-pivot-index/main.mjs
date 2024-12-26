import assert from "node:assert/strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    left += nums[i];

    if (sum - left == left - nums[i]) {
      return i;
    }
  }

  return -1;
};

assert.equal(pivotIndex([1, 7, 3, 6, 5, 6]), 3);
assert.equal(pivotIndex([1, 2, 3]), -1);
assert.equal(pivotIndex([2, 1, -1]), 0);
