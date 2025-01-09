import assert from 'node:assert/strict';

// Given a binary array nums and an integer k, return the maximum number of consecutive
// 1's in the array if you can flip at most k 0's.
// 
// Example 1:
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// 
// Example 2:
// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// 
// Constraints:
//     1 <= nums.length <= 10^5
//     nums[i] is either 0 or 1.
//     0 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let max = 0
  let left = 0
  let zeros = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeros++
    }

    while (zeros > k) {
      if (nums[left] == 0) {
        zeros--
      }

      left++
    }

    max = Math.max(max, i - left + 1)
  }

  return max
};

/**
 * FIX:
 * - Slow runtime
 * - High memory usage
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var longestOnes = function(nums, k) {
//   let max = 0
//   let length = 0
//   let r = k
//   let i = 0
//   let j = 0
// 
//   while (i < nums.length) {
//     while (j < nums.length) {
//       if (nums[j] == 0) {
//         if (r == 0) {
//           break
//         }
// 
//         r--
//       }
// 
//       length++
//       j++
//     }
// 
//     max = Math.max(max, length)
// 
//     if (nums[i] == 0 && r < k && k > 0) {
//       length--
//       r++
//     }
// 
//     if (nums[i] == 1) {
//       length--
//     }
// 
//     i++
//     if (j < i) {
//       j = i
//     }
//   }
// 
//   return max
// };

assert.equal(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2), 6)
assert.equal(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3), 10)
assert.equal(longestOnes([0, 0, 0, 0], 0), 0)
assert.equal(longestOnes([1, 0, 0, 0], 2), 3)
assert.equal(longestOnes([0], 1), 1)
assert.equal(longestOnes([0, 0, 1, 1, 1, 0, 0], 0), 3)
