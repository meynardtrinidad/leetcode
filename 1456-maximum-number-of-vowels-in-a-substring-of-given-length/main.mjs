import assert from 'node:assert/strict';

// Given a string s and an integer k, return the maximum number of
// vowel letters in any substring of s with length k.
//
// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
//
// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
//
// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
//
// Example 3:
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.
//
// Constraints:
//     1 <= s.length <= 105
//     s consists of lowercase English letters.
//     1 <= k <= s.length

/**
 * FIX:
 * - High memory
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  let count = 0
  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) {
      count++
    }
  }

  let max = count
  for (let i = 1; i < s.length - k + 1; i++) {
    let j = i + k - 1

    if (isVowel(s[j])) {
      count++
    }

    if (isVowel(s[i - 1])) {
      count--
    }

    if (count > max) {
      max = count
    }
  }

  return max
};

function isVowel(ch) {
  return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'
}

assert.equal(maxVowels("abciiidef", 3), 3)
assert.equal(maxVowels("aeiou", 2), 2)
assert.equal(maxVowels("leetcode", 3), 2)
assert.equal(maxVowels("weallloveyou", 7), 4)
assert.equal(maxVowels("a", 1), 1)
