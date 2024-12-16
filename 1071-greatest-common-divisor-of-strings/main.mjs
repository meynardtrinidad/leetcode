import assert from 'node:assert/strict';

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(str1, str2) {
  const l1 = str1.length, l2 = str2.length;

  if (str1 + str2 != str2 + str1) {
    return ""
  }

  return str1.substring(0, gcd(l1, l2))
};

function gcd(a, b) {
  return b == 0 ? a : gcd(b, a % b)
}

assert.equal(gcdOfStrings("ABCABC", "ABC"), "ABC")
assert.equal(gcdOfStrings("ABABAB", "ABAB"), "AB")
assert.equal(gcdOfStrings("LEET", "CODE"), "")
