import assert from "node:assert/strict";

// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
//
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
// Constraints:
//     1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lowercase English letters if it is non-empty.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = strs[0];
  let len = result.length;

  for (let i = 1; i < strs.length; i++) {
    let s = strs[i];
    while (result !== s.substring(0, len)) {
      len--;
      if (len == 0) {
        return "";
      }
      result = result.substring(0, len);
    }
  }

  return result;
};

assert.equal(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
assert.equal(longestCommonPrefix(["dog", "racecar", "car"]), "");
assert.equal(longestCommonPrefix(["", "b"]), "");
