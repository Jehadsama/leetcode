/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let left = (right = 0);
  while (right < nums.length) {
    if (nums[right] > 0) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
  for (let i = left; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
// @lc code=end
