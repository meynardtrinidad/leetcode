/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
  let count = 0

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] == 0) {
      const le = i == 0 || flowerbed[i - 1] == 0
      const re = i == flowerbed.length - 1 || flowerbed[i + 1] == 0

      if (le && re) {
        flowerbed[i] = 1
        count++
      }
    }

    if (count >= n) break
  }

  return count >= n
};
