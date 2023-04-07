/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //   const numsSorted = nums.sort((a, b) => a - b);

  //   const m = [];

  //   for (let i = 0; i < numsSorted.length; i++) {
  //     const val = numsSorted[i];
  //     if (m.includes(val)) {
  //       m.pop();
  //       continue;
  //     }
  //     m.push(val);
  //   }
  //   return m[0];
  let target = nums[0];
  for (let i = 1; i < nums.length; i++) {
    target ^= nums[i];
  }
  return target;
};
// @lc code=end

// 解题思路： 异或运算
// 1.  a ^ a = 0
// 2.  a ^ 0 = a
// 3.  a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b
