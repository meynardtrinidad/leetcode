import assert from 'node:assert/strict';

/**
 * FIXME: Dumb implementation
 *
 * @param {character[]} chars
 * @return {number}
 */
const compress = function(chars) {
  let str = ''
  let curr = ''
  let freq = 0

  for (let i = 0; i < chars.length; i++) {
    if (i == 0) {
      str += chars[i]
      curr = chars[i]
      freq++
      continue
    }

    if (curr == chars[i]) {
      freq++
    } else {
      if (freq > 1) {
        str += freq
      }

      curr = chars[i]
      str += curr
      freq = 1
    }

    if (i == chars.length - 1 && freq > 1) {
      str += freq
    }
  }

  chars.splice(str.length)

  for (let i = 0; i < str.length; i++) {
    chars[i] = str[i]
  }

  return chars.length
};

assert.equal(compress(["a", "a", "b", "b", "c", "c", "c"]), ["a", "2", "b", "2", "c", "3"].length)
assert.equal(compress(["a"]), ["a"].length)
assert.equal(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]), ["a", "b", "1", "2"].length)
