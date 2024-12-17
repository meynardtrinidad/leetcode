import assert from 'node:assert/strict';

/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
const repeatLimitedString = function(s, repeatLimit) {
  const freq = new Array(26).fill(0)
  let result = ""
  let ptr = 25 // Start at index of 'z'

  let base = 'a'.charCodeAt(0)
  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - base] += 1 // Populate the frequency of string
  }

  while (ptr >= 0) {
    if (freq[ptr] == 0) {
      ptr--
      continue
    }

    let use = Math.min(freq[ptr], repeatLimit)
    let ch = String.fromCharCode(base + ptr)
    for (let i = 0; i < use; i++) {
      result += ch
    }
    freq[ptr] -= use

    if (freq[ptr] > 0) {
      let smPtr = ptr - 1
      while (smPtr >= 0 && freq[smPtr] == 0) {
        smPtr--
      }
      if (smPtr < 0) break

      ch = String.fromCharCode(base + smPtr)
      result += ch
      freq[smPtr]--
    }
  }

  return result
};

assert.equal(repeatLimitedString("cczazcc", 3), "zzcccac")
assert.equal(repeatLimitedString("aababab", 2), "bbabaa")
