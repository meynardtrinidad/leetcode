import assert from 'node:assert/strict';

/**
 * NOTE:
 * - Improved through reversing the number itself.
 *
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0) {
    return false
  }

  let reverse = 0
  let copy = x

  while (x > 0) {
    reverse = (reverse * 10) + (x % 10)
    x = Math.floor(x / 10)
  }

  return reverse == copy
};

// NOTE:
// - Previous implementation which is slow due to type casting from int to string
//
// const isPalindrome = function(x) {
//   const str = String(x)
// 
//   for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
//     if (str[i] != str[j]) {
//       return false
//     }
//   }
// 
//   return true
// };

assert.equal(isPalindrome(121), true)
assert.equal(isPalindrome(-121), false)
assert.equal(isPalindrome(10), false)
