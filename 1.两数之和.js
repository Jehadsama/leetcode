/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const m = {};

  for (let i = 0; i < nums.length; i++) {
    const cha = target - nums[i];
    if (cha in m) {
      return [i, m[cha]];
    }

    m[nums[i]] = i;
  }
  return null;
};
// @lc code=end
