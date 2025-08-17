/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  var originalNum = [...nums];
  for (let i = 0; i < originalNum.length; i++) {
    nums[(i + k) % originalNum.length] = originalNum[i];
  }
};
// @lc code=end
