/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // 前缀和解法
  // 为了兼容0以前的情况，刚好pre[0]没有，1次
  let m = { 0: 1 };

  let count = (preV = 0);

  for (let i = 0; i < nums.length; i++) {
    preV += nums[i];

    if (m[preV - k]) {
      count += m[preV - k];
    }

    m[preV] = (m[preV] || 0) + 1;
  }
  return count;
};
// @lc code=end
