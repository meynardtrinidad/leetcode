import assert from 'node:assert/strict';
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
  const max = Math.max(...candies)
  const result = []

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      result.push(true)
    } else {
      result.push(false)
    }
  }

  return result
};

assert.deepEqual(kidsWithCandies([2, 3, 5, 1, 3], 3), [true, true, true, false, true])
assert.deepEqual(kidsWithCandies([4, 2, 1, 1, 2], 1), [true, false, false, false, false])
assert.deepEqual(kidsWithCandies([12, 1, 12], 10), [true, false, true])
