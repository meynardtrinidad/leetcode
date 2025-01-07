import assert from 'node:assert/strict';

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  const matched = []

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (j == i) continue

      if (words[j].includes(words[i])) {
        matched.push(words[i])
        break
      }
    }
  }

  return matched
};

assert.deepEqual(stringMatching(["mass", "as", "hero", "superhero"]), ["as", "hero"])
assert.deepEqual(stringMatching(["leetcode", "et", "code"]), ["et", "code"])
assert.deepEqual(stringMatching(["blue", "green", "bu"]), [])
