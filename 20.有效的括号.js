/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const m = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const stacks = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (['(', '{', '['].includes(c)) {
      stacks.push(c);
    } else {
      if (stacks.length > 0 && m[c] === stacks[stacks.length - 1]) {
        stacks.pop();
      } else {
        return false;
      }
    }
  }
  return !stacks.length;
};
// @lc code=end
