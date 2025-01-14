import assert from 'node:assert/strict';

// We are given an array asteroids of integers representing asteroids in a row. The indices of
// the asteriod in the array represent their relative position in space.
//
// For each asteroid, the absolute value represents its size, and the sign represents its direction 
// (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
//
// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one 
// will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
//
// Example 1:
// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
//
// Example 2:
// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.
//
// Example 3:
// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
//
//
// Constraints:
//  2 <= asteroids.length <= 10^4
//  -1000 <= asteroids[i] <= 1000
//  asteroids[i] != 0

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = []

  for (let i = 0; i < asteroids.length; i++) {
    if (!stack.length) {
      stack.push(asteroids[i])
      continue
    }

    if (asteroids[i] < 0 && stack[stack.length - 1] > 0) {
      let explode = false
      while (asteroids[i] < 0 && stack[stack.length - 1] > 0 && stack.length) {
        const a = Math.abs(asteroids[i])

        if (a >= stack[stack.length - 1]) {
          let val = stack.pop()
          if (val > 0 && a <= val) {
            explode = true
            break
          }
        } else if (a < stack[stack.length - 1]) {
          explode = true
          break
        }
      }

      if (!explode) {
        stack.push(asteroids[i])
      }
    } else {
      stack.push(asteroids[i])
    }
  }

  return stack
};

assert.deepEqual(asteroidCollision([5, 10, -5]), [5, 10])
assert.deepEqual(asteroidCollision([8, -8]), [])
assert.deepEqual(asteroidCollision([10, 2, -5]), [10])
assert.deepEqual(asteroidCollision([-2, -2, 1, -2]), [-2, -2, -2])
