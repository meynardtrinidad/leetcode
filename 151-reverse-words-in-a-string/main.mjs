import assert from 'node:assert/strict';
/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  return s
    .trim()
    .split(" ")
    .filter((a) => a != "")
    .reverse()
    .join(" ")
};

assert.equal(reverseWords("the sky is blue"), "blue is sky the")
assert.equal(reverseWords("  hello world  "), "world hello")
assert.equal(reverseWords("a good   example"), "example good a")
