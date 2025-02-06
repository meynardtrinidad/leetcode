import assert from 'node:assert/strict';

// In the world of Dota2, there are two parties: the Radiant and the Dire.
//
// The Dota2 senate consists of senators coming from two parties. Now
// the Senate wants to decide on a change in the Dota2 game. The voting for this change is
// a round-based procedure. In each round, each senator can exercise one of the two rights:
//
// - Ban one senator's right: A senator can make another senator lose all his rights in this
// and all the following rounds.
// - Announce the victory: If this senator found the senators who still have rights to 
// vote are all from the same party, he can announce the victory and decide on the change
// in the game.
//
// Given a string senate representing each senator's party belonging. The character 'R' and
// 'D' represent the Radiant party and the Dire party. Then if there are n senators,
// the size of the given string will be n.
//
// The round-based procedure starts from the first senator to the last senator in the
// given order. This procedure will last until the end of voting. All the senators
// who have lost their rights will be skipped during the procedure.
//
// Suppose every senator is smart enough and will play the best strategy for his own party.
// Predict which party will finally announce the victory and change the Dota2 game.
// The output should be "Radiant" or "Dire".
//
// Example 1:
// Input: senate = "RD"
// Output: "Radiant"
// Explanation:
// The first senator comes from Radiant and he can just ban the next senator's right in round 1.
// And the second senator can't exercise any rights anymore since his right has been banned.
// And in round 2, the first senator can just announce the victory since he is the only
// guy in the senate who can vote.
//
// Example 2:
// Input: senate = "RDD"
// Output: "Dire"
// Explanation: 
// The first senator comes from Radiant and he can just ban the next senator's right in round 1.
// And the second senator can't exercise any rights anymore since his right has been banned.
// And the third senator comes from Dire and he can ban the first senator's right in round 1.
// And in round 2, the third senator can just announce the victory since he is the 
// only guy in the senate who can vote.
//
// Constraints:
//   n == senate.length
//   1 <= n <= 10^4
//   senate[i] is either 'R' or 'D'.

/**
 * @template T
 * @param {T} val
 * @param {Node} next
 * @return {Node}
 */
// function Node(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }
// 
// /**
//  * @param {Node | null} head
//  * @return {Queue}
//  */
// function Queue(head) {
//   this.length = (head === undefined) ? 0 : 1
//   this.head = (head === undefined) ? null : head
//   this.tail = (head === undefined) ? null : head
// }
// 
// /**
//  * @template T
//  * @param {T} val
//  * @return {void}
//  */
// Queue.prototype.enqueue = function(val) {
//   const node = new Node(val)
// 
//   if (!this.head) {
//     this.head = node
//   }
// 
//   if (this.tail) {
//     this.tail.next = node
//   }
// 
//   this.tail = node
//   this.length++
// }
// 
// /**
//  * @template T
//  * @return {T | undefined}
//  */
// Queue.prototype.dequeue = function() {
//   const node = this.head
//   if (!node) {
//     return
//   }
// 
//   this.length--
// 
//   if (this.length == 0) {
//     this.tail = null
//   }
// 
//   this.head = node.next
//   return node.val
// }
// 
// var predictPartyVictory = function(senate) {
//   let n = 0
//   const dir = new Queue()
//   const rad = new Queue()
// 
//   for (let i = 0; i < senate.length; i++) {
//     if (senate[i] == 'R') {
//       rad.enqueue(i)
//     }
// 
//     if (senate[i] == 'D') {
//       dir.enqueue(i)
//     }
// 
//     n++
//   }
// 
//   while (dir.length > 0 && rad.length > 0) {
//     let r = rad.dequeue()
//     let d = dir.dequeue()
// 
//     if (r < d) {
//       rad.enqueue(n++)
//     } else if (d < r) {
//       dir.enqueue(n++)
//     }
//   }
// 
//   return rad.length > dir.length ? "Radiant" : "Dire"
// };

var predictPartyVictory = function(senate) {
  let n = 0
  const dir = []
  const rad = []

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] == 'R') {
      rad.push(i)
    }

    if (senate[i] == 'D') {
      dir.push(i)
    }

    n++
  }

  while (dir.length > 0 && rad.length > 0) {
    let r = rad.shift()
    let d = dir.shift()

    if (r < d) {
      rad.push(n++)
    } else if (d < r) {
      dir.push(n++)
    }
  }

  return rad.length > dir.length ? "Radiant" : "Dire"
};

assert.equal(predictPartyVictory("RD"), "Radiant")
assert.equal(predictPartyVictory("RDD"), "Dire")
assert.equal(predictPartyVictory("DDRRR"), "Dire")
assert.equal(predictPartyVictory("D"), "Dire")
assert.equal(predictPartyVictory("RRDDD"), "Radiant")
assert.equal(predictPartyVictory("DDRRRR"), "Radiant")
assert.equal(predictPartyVictory("DRRD"), "Dire")
assert.equal(predictPartyVictory("DRRDDR"), "Dire")
assert.equal(predictPartyVictory("DRDRRDDRDDR"), "Dire")
