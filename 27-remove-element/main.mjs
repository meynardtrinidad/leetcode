import assert from "node:assert/strict";
import { test } from "../utils.mjs";

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

test(() => {
  const nums = [3, 3]
  const val = 5
  const expected = [3, 3]
  const output = removeElement(nums, val)
  assert.deepEqual(
    output,
    expected.length)
})

test(() => {
  const nums = [3, 2, 2, 3]
  const val = 3
  const expected = [2, 2]
  const output = removeElement(nums, val)
  assert.deepEqual(
    output,
    expected.length)
})

test(() => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2]
  const val = 2
  const expected = [0, 0, 1, 3, 4]
  const output = removeElement(nums, val)
  assert.deepEqual(
    output,
    expected.length)
})

test(() => {
  const nums = [0]
  const val = 1
  const expected = [0]
  const output = removeElement(nums, val)
  assert.deepEqual(
    output,
    expected.length)
})

test(() => {
  const nums = [1]
  const val = 1
  const expected = []
  const output = removeElement(nums, val)
  assert.deepEqual(
    output,
    expected.length)
})
