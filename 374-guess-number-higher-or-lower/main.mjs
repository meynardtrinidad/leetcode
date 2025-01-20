import assert from 'node:assert/strict';

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return -1 if num is higher than the picked number
 *          1 if num is lower than the picked number
 *          otherwise return 0
 * var guess = function(num) {}
 */
let pick
var guess = function(num) {
  if (num > pick) return -1
  if (num < pick) return 1
  return 0
}

/**
 * Range is 1 to n
 *
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let l = 0
  let r = n - 1

  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    let result = guess(m + 1)

    if (result == 0) {
      return m + 1
    } else if (result == 1) {
      l = m + 1
    } else {
      r = m - 1
    }
  }
};

pick = 6
assert.equal(guessNumber(10), pick)
pick = 1
assert.equal(guessNumber(1), pick)
pick = 1
assert.equal(guessNumber(2), pick)
pick = 2
assert.equal(guessNumber(2), pick)
pick = 1702766719
assert.equal(guessNumber(2126753390), pick)
