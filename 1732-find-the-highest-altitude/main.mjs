import assert from 'node:assert/strict';

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let max = 0
  let prev = 0
  for (let i = 0; i < gain.length; i++) {
    prev += gain[i]

    if (prev > max) {
      max = prev
    }
  }
  return max
};

assert.equal(largestAltitude([-5, 1, 5, 0, -7]), 1)
assert.equal(largestAltitude([-4, -3, -2, -1, 4, 3, 2]), 0)
