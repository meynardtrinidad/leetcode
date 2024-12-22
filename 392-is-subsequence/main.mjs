import assert from 'node:assert/strict';

/*
 * FIXME: Slow runtime and huge memory usage.
 *
 * @param { string } s
 * @param { string } t
 * @return { boolean }
 */
var isSubsequence = function(s, t) {
  let i = 0
  let ptr = 0

  if (s.length == 0) return true

  while (i < s.length) {
    let j = ptr
    let found = false

    while (j < t.length) {
      if (s[i] == t[j]) {
        if (j < ptr) return false

        found = true
        ptr = j + 1
        break
      }

      j++
    }

    if (!found) return false

    i++
  }

  return true
};

assert.deepEqual(isSubsequence("abc", "ahbgdc"), true)
assert.deepEqual(isSubsequence("axc", "ahbgdc"), false)
assert.deepEqual(isSubsequence("", ""), true)
assert.deepEqual(isSubsequence("abc", ""), false)
assert.deepEqual(isSubsequence("", "abc"), true)
assert.deepEqual(isSubsequence("aaaaaa", "bbaaaa"), false)
