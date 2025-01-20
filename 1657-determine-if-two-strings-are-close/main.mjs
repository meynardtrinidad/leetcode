import assert from 'node:assert/strict';

// Two strings are considered close if you can attain one from the other using the following operations:
// 
// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another 
// existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.
// 
// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
// 
// Example 1:
// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
//
// Example 2:
// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
//
// Example 3:
// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"
//
// Constraints:
//  1 <= word1.length, word2.length <= 10^5
//  word1 and word2 contain only lowercase English letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  if (word1.length != word2.length) {
    return false
  }

  const count1 = new Map()
  const count2 = new Map()

  // Get count of the characters for both words
  for (let i = 0; i < word1.length; i++) {
    if (count1.has(word1[i])) {
      count1.set(word1[i], count1.get(word1[i]) + 1)
    } else {
      count1.set(word1[i], 1)
    }

    if (count2.has(word2[i])) {
      count2.set(word2[i], count2.get(word2[i]) + 1)
    } else {
      count2.set(word2[i], 1)
    }
  }

  const freq1 = []
  const freq2 = []

  // Check if characters exists in the other words
  for (const [k, v] of count1) {
    if (!count2.has(k)) {
      return false
    }
    freq1.push(v)
  }

  for (const [_, v] of count2) {
    freq2.push(v)
  }

  freq1.sort()
  freq2.sort()

  // Check for similar frequencies
  for (let i = 0; i < freq1.length; i++) {
    if (freq1[i] != freq2[i]) {
      return false
    }
  }

  return true
};

assert.equal(closeStrings("abc", "bca"), true)
assert.equal(closeStrings("a", "aa"), false)
assert.equal(closeStrings("cabbba", "abbccc"), true)
assert.equal(closeStrings("cabbba", "aabbss"), false)
assert.equal(closeStrings("abbzzca", "babzzcz"), false)
