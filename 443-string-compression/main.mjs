import assert from 'node:assert/strict';

/**
 * @param {character[]} chars
 * @return {characters[]}
 */
const compress = function(chars) {
  let i = 0
  let ctr = 0

  while (i < chars.length) {
    let freq = 1
    let j = i + 1

    while (chars[i] == chars[j]) {
      freq++
      j++
    }

    chars[ctr++] = chars[i]
    if (freq > 1) {
      let str = freq.toString()
      for (let k = 0; k < str.length; k++) {
        chars[ctr++] = str[k]
      }
    }

    i += freq
  }

  chars.splice(ctr)
  return chars
};

// /**
//  * FIXME: Dumb implementation
//  *
//  * @param {character[]} chars
//  * @return {number}
//  */
// const compress = function(chars) {
//   let str = ''
//   let curr = ''
//   let freq = 0
// 
//   for (let i = 0; i < chars.length; i++) {
//     if (i == 0) {
//       str += chars[i]
//       curr = chars[i]
//       freq++
//       continue
//     }
// 
//     if (curr == chars[i]) {
//       freq++
//     } else {
//       if (freq > 1) {
//         str += freq
//       }
// 
//       curr = chars[i]
//       str += curr
//       freq = 1
//     }
// 
//     if (i == chars.length - 1 && freq > 1) {
//       str += freq
//     }
//   }
// 
//   chars.splice(str.length)
// 
//   for (let i = 0; i < str.length; i++) {
//     chars[i] = str[i]
//   }
// 
//   return chars.length
// };

const r1 = compress(["a", "a", "b", "b", "c", "c", "c"])
assert.deepEqual(r1, ["a", "2", "b", "2", "c", "3"])
assert.equal(r1.length, ["a", "2", "b", "2", "c", "3"].length)

const r2 = compress(["a"])
assert.deepEqual(r2, ["a"])
assert.equal(r2.length, ["a"].length)

const r3 = compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
assert.deepEqual(r3, ["a", "b", "1", "2"])
assert.equal(r3.length, ["a", "b", "1", "2"].length)
