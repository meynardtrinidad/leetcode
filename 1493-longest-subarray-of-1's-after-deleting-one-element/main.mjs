import assert from 'node:assert/strict';

// Given a binary array nums, you should delete one element from it.
// 
// Return the size of the longest non-empty subarray containing only 1's in 
// the resulting array. Return 0 if there is no such subarray.
// 
// Example 1:
// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// 
// Example 2:
// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// 
// Example 3:
// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.
// 
// Constraints:
//     1 <= nums.length <= 10^5
//     nums[i] is either 0 or 1.

/**
 * FIX:
 * - Too slow
 *
 * @param {number[]} nums
 * @return {number}
 */
// var longestSubarray = function(nums) {
//   let max = 0
//   let left = 0
//   let zero = 0
//   let curr = 0
// 
//   for (let right = 0; right < nums.length; right++) {
//     if (zero == 0 && right == nums.length - 1) {
//       max = nums.length - 1
//       break
//     }
// 
//     if (nums[right] == 0) {
//       zero++
// 
//       while (zero > 1) {
//         if (nums[left] == 0) {
//           zero--
//         }
// 
//         if (nums[left] == 1) {
//           curr--
//         }
// 
//         left++
//       }
// 
//       continue
//     }
// 
//     curr++
//     max = Math.max(curr, max)
//   }
// 
//   return max
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let left = 0
  let right = 0
  let zero = 0
  let max = 0

  for (right; right < nums.length; right++) {
    if (nums[right] == 0) {
      zero++
    }

    while (zero > 1) {
      if (nums[left] == 0) {
        zero--
      }
      left++
    }

    max = Math.max(max, right - left)
  }

  return max
};

assert.equal(longestSubarray([1, 1, 0, 1]), 3)
assert.equal(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]), 5)
assert.equal(longestSubarray([1, 1, 1]), 2)
