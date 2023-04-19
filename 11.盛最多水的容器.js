/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
    if (height[left] >= height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return max;
};
// @lc code=end
