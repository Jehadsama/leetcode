/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let res = 0;

  let len = height.length;

  if (len < 3) {
    return 0;
  }

  let leftMax = new Array(len);
  let rightMax = new Array(len);

  leftMax[0] = height[0];

  rightMax[len - 1] = height[len - 1];

  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }

  // 从右向左计算 r_max
  for (var i = len - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }

  for (let i = 0; i < len; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return res;
};
// @lc code=end
