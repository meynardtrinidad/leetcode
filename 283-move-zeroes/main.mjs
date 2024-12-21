import assert from 'node:assert/strict';

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (nums.length == 1) {
    return nums
  }

  let i = 0
  let j = i + 1
  while (i < nums.length && j < nums.length) {
    if (nums[i] == 0 && nums[j] == 0) {
      j++
    } else if (nums[i] == 0 && nums[j] != 0) {
      let tmp = nums[j]
      nums[j] = nums[i]
      nums[i] = tmp
    } else {
      i++
      j++
    }
  }

  return nums
};

assert.deepEqual(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0])
assert.deepEqual(moveZeroes([0]), [0])
