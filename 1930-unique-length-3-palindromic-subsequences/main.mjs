import assert from 'node:assert/strict';

// Given a string s, return the number of unique palindromes of length three that are a subsequence of s.
//
// Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.
//
// A palindrome is a string that reads the same forwards and backwards.
//
// A subsequence of a string is a new string generated from the original string with some characters
// (can be none) deleted without changing the relative order of the remaining characters.
//     For example, "ace" is a subsequence of "abcde".
//
// Example 1:
//
// Input: s = "aabca"
// Output: 3
// Explanation: The 3 palindromic subsequences of length 3 are:
// - "aba" (subsequence of "aabca")
// - "aaa" (subsequence of "aabca")
// - "aca" (subsequence of "aabca")
//
// Example 2:
//
// Input: s = "adc"
// Output: 0
// Explanation: There are no palindromic subsequences of length 3 in "adc".
//
// Example 3:
//
// Input: s = "bbcbaba"
// Output: 4
// Explanation: The 4 palindromic subsequences of length 3 are:
// - "bbb" (subsequence of "bbcbaba")
// - "bcb" (subsequence of "bbcbaba")
// - "bab" (subsequence of "bbcbaba")
// - "aba" (subsequence of "bbcbaba")


/**
 * - Hash Table
 * - Prefix Sums
 * - Bit Manipulation
 * - String
 *
 * - Read this task again. And notice that palindrome length is 3.
 * It consists of three chars only, the left, right character (first == last)
 * and the middle. The middle is only one character.
 * Think about spans rather than subsets. Consider any candidate that lies between spans but only one time.
 * Second hint: only 26 candidates are possible (only lowercase english letters).
 *
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((acc, curr) => {
    return { ...acc, [curr]: 0 }
  }, {})

  for (let i = 0; i < s.length; i++) {
    letters[s[i]] += 1
  }

  let count = 0
  for (const ch in letters) {
    if (letters[ch] < 2) {
      continue
    }

    let left = -1
    let right = -1

    for (let i = 0; i < s.length; i++) {
      if (ch == s[i]) {
        left = i

        for (let j = s.length; j > i; j--) {
          if (ch == s[j]) {
            right = j
            break
          }
        }
        break
      }
    }

    const unique = new Set(s.substring(left + 1, right))
    count += unique.size
  }

  return count
};

assert.equal(countPalindromicSubsequence("aabca"), 3)
assert.equal(countPalindromicSubsequence("adc"), 0)
assert.equal(countPalindromicSubsequence("bbcbaba"), 4)
