import assert from 'node:assert/strict';

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let max = 0
  let ones = 0
  let zeros = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '1') {
      ones++
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == '1') {
      ones--
    } else {
      zeros++
    }

    max = Math.max(ones + zeros, max)
  }

  return max
};

/**
 * FIX: Slow O(n^2) time complexity
 *
 * @param {string} s
 * @return {number}
 */
// var maxScore = function(s) {
//   let max = 0
// 
//   for (let i = 0; i < s.length - 1; i++) {
//     let sum = 0
//     for (let j = 0; j < i + 1; j++) {
//       if (s[j] == '0') {
//         sum += 1
//       }
//     }
// 
//     for (let j = i + 1; j < s.length; j++) {
//       if (s[j] == '1') {
//         sum += 1
//       }
//     }
// 
//     max = Math.max(sum, max)
//   }
// 
//   return max
// };

assert.equal(maxScore("011101"), 5)
assert.equal(maxScore("00111"), 5)
assert.equal(maxScore("1111"), 3)
assert.equal(maxScore("0000001"), 7)
assert.equal(maxScore("00"), 1)
