import assert from 'node:assert/strict';

/**
 * FIXME: Can be improved by manipulating the actual array instead of creating a new one.
 *
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = function(prices) {
  const result = []
  for (let i = 0; i < prices.length; i++) {
    let discount = 0
    let j = i + 1

    while (j < prices.length) {
      if (prices[j] <= prices[i]) {
        discount = prices[j]
        break
      }

      j++
    }

    result.push(prices[i] - discount)
  }
  return result
};

assert.deepEqual(finalPrices([8, 4, 6, 2, 3]), [4, 2, 4, 2, 3])
assert.deepEqual(finalPrices([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])
assert.deepEqual(finalPrices([10, 1, 1, 6]), [9, 0, 1, 6])
