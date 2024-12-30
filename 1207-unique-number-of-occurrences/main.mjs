import assert from "node:assert/strict";

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const occ = new Map();

  for (let i = 0; i < arr.length; i++) {
    let x = occ.get(arr[i]);
    occ.set(arr[i], x ? x + 1 : 1);
  }

  const val = new Map();
  for (const [, v] of occ) {
    if (val.get(v)) {
      return false;
    }

    val.set(v, 1);
  }

  return true;
};

assert.equal(uniqueOccurrences([1, 2, 2, 1, 1, 3]), true);
assert.equal(uniqueOccurrences([1, 2]), false);
assert.equal(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]), true);
