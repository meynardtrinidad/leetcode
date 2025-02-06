import assert from "node:assert/strict";

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
//
// An input string is valid if:
//
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.
//
// Example 1:
// Input: s = "()"
// Output: true
//
// Example 2:
// Input: s = "()[]{}"
// Output: true
//
// Example 3:
// Input: s = "(]"
// Output: false
//
// Example 4:
// Input: s = "([])"
// Output: true
//
// Constraints:
//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pair = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let el = s[i];

    if (stack.length && stack[stack.length - 1] == pair[el]) {
      stack.pop();
      continue;
    }

    stack.push(el);
  }

  return stack.length > 0 ? false : true;
};

assert.equal(isValid("()"), true);
assert.equal(isValid("([])"), true);
assert.equal(isValid("()[]{}"), true);
assert.equal(isValid("(]"), false);
