/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
  const len1 = word1.length
  const len2 = word2.length

  let mergedStr = ""
  let i = 0
  let longest = len1 > len2 ? len1 : len2

  while (i < longest) {
    if (word1[i]) {
      mergedStr += word1[i]
    }

    if (word2[i]) {
      mergedStr += word2[i]
    }

    i++
  }

  return mergedStr
};
