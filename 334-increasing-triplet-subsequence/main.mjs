import assert from 'node:assert/strict';

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  // Start by acting as if the last element is the largest number
  let a = nums[nums.length - 1]
  let b;

  for (let i = nums.length - 1; i >= 0; i--) {
    // Set new largest number which will be the new `k` or largest index
    if (nums[i] >= a) {
      a = nums[i]
      continue
    }

    // Finds the `j` index or second largest number
    if ((nums[i] < a && nums[i] > b) || b == undefined) {
      b = nums[i]
      continue
    }

    // Returns true immediately if a match is found where in the `i` index
    // is less than the value of `j` index
    if (nums[i] < a && nums[i] < b) {
      return true
    }
  }

  return false
};

/**
 * FIX: Time limit exceeded on large inputs
 *
 * @param {number[]} nums
 * @return {boolean}
 */
// var increasingTriplet = function(nums) {
//   const set = new Set(nums)
//   if (set.size < 3) {
//     return false
//   }
//
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] > nums[i]) {
//         for (let k = j + 1; k < nums.length; k++) {
//           if (nums[k] > nums[j]) {
//             return true
//           }
//         }
//       }
//     }
//   }
// 
//   return false
// };

assert.equal(increasingTriplet([1, 2, 3, 4, 5]), true)
assert.equal(increasingTriplet([5, 4, 3, 2, 1]), false)
assert.equal(increasingTriplet([2, 1, 5, 0, 4, 6]), true)
assert.equal(increasingTriplet([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), false)
