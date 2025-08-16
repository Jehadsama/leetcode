/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 前缀和
  // 记数组的全部元素之和为 total，当遍历到第 i 个元素时，设其左侧元素之和为 sum，则其右侧元素之和为 total−numsi−sum。
  // 左右侧元素相等即为 sum=total−numsi−sum，即 2×sum+numsi =total。
  // 当中心索引左侧或右侧没有元素时，即为零个项相加，这在数学上称作「空和」（empty sum）。在程序设计中我们约定「空和是零」。

  let total = nums.reduce((acc, cur) => acc + cur, 0);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (2 * sum + nums[i] === total) {
      return i;
    }
    sum += nums[i];
  }
  return -1;

  // other solution
  //   let leftSum = 0;
  //   let rightSum = 0;
  //   let mid = 0;
  //   for (let i = 1; i < nums.length; i++) {
  //     rightSum += nums[i];
  //   }
  //   if (leftSum === rightSum) {
  //     return mid;
  //   }
  //   mid += 1;
  //   for (; mid < nums.length; mid++) {
  //     leftSum += nums[mid - 1];
  //     rightSum -= nums[mid];
  //     if (leftSum === rightSum) {
  //       return mid;
  //     }
  //   }
  //   return -1;
};
// @lc code=end
