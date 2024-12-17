import assert from 'node:assert/strict';

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const str = String(x)

  for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
    if (str[i] != str[j]) {
      return false
    }
  }

  return true
};

assert.equal(isPalindrome(121), true)
assert.equal(isPalindrome(-121), false)
assert.equal(isPalindrome(10), false)
