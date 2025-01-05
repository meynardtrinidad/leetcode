import assert from 'node:assert/strict';

/**
 * - Two pointer
 * - Greedy
 * - Array
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0
  let j = height.length - 1

  let first = height[i]
  let second = height[j]
  let max = 0

  while (i < j) {
    max = Math.max(Math.min(first, second) * (j - i), max)

    if (first <= second) {
      i++
      first = height[i]
    } else if (second <= first) {
      j--
      second = height[j]
    }
  }

  return max
};
// [1, 8, 6, 2, 5, 4, 8, 3, 7]
//  ^                       ^ first < second
//     ^                    ^

// You are given an integer array height of length n. There are n vertical lines drawn
// such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
//
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
//
// Return the maximum amount of water a container can store.
//
// Notice that you may not slant the container.
//
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.
//
// Input: height = [1, 1]
// Output: 1
assert.equal(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49)
assert.equal(maxArea([1, 1]), 1)
