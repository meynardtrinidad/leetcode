import assert from 'node:assert/strict';

// The Tribonacci sequence Tn is defined as follows: 
//
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
//
// Given n, return the value of Tn.
//
// Example 1:
// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
//
// Example 2:
// Input: n = 25
// Output: 1389537
//
// Constraints:
//     0 <= n <= 37
//     The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n == 0) {
    return 0
  } else if (n == 1 || n == 2) {
    return 1
  }

  const memo = []
  let ctr = 0
  while (ctr < n) {
    if (ctr == 0) {
      memo.push(0)
    } else if (ctr == 1) {
      memo.push(1)
    } else if (ctr == 2) {
      memo.push(1)
    } else {
      const l = memo.length
      memo.push(memo[l - 3] + memo[l - 2] + memo[l - 1])
    }

    ctr++
  }

  return memo.slice(memo.length - 3, memo.length).reduce((acc, curr) => acc + curr, 0)
};

assert.deepEqual(tribonacci(4), 4)
assert.deepEqual(tribonacci(1), 1)
assert.deepEqual(tribonacci(2), 1)
assert.deepEqual(tribonacci(25), 1389537)
