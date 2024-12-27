import assert from 'node:assert/strict';

var RecentCounter = function() {
  this.requests = [];
  this.start = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.requests.push(t)
  while (this.requests[this.start] < t - 3000) {
    this.start++
  }
  return this.requests.length - this.start
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 *
 * - Input
 *  ["RecentCounter", "ping", "ping", "ping", "ping"]
 *  [[], [1], [100], [3001], [3002]]
 * - Output
 *  [null, 1, 2, 3, 3]
 */

var obj = new RecentCounter()
var param_1 = obj.ping(1) // [-2999, 1]
assert.equal(param_1, 1)
var param_2 = obj.ping(100) // [-2900, 100]
assert.equal(param_2, 2)
var param_3 = obj.ping(3001) // [1, 3001]
assert.equal(param_3, 3)
var param_4 = obj.ping(3002) // [2, 3002]
assert.equal(param_4, 3)
