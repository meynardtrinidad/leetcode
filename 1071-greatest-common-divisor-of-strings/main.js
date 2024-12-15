/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(str1, str2) {
  let long = str1.length > str2.length ? str1 : str2
  let short = str1.length < str2.length ? str1 : str2
  let output = ""
  let j = 0

  for (let i = 0; i < long.length; i++) {
    if (long[i] == short[j]) {
      output += short[j]
      j++
    }
  }

  return output
};
