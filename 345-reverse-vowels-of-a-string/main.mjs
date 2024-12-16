import assert from 'node:assert/strict';

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
  let str = ''
  const v = []

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      v.push(s[i])
    }
  }

  let j = v.length - 1
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      str += v[j]
      j--

      continue
    }

    str += s[i]
  }

  return str
};

assert.equal(reverseVowels("IceCreAm"), "AceCreIm")
assert.equal(reverseVowels("leetcode"), "leotcede")
