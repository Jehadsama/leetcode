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
  let leftSum = 0;
  let rightSum = 0;
  let mid = 0;

  for (let i = 1; i < nums.length; i++) {
    rightSum += nums[i];
  }

  if (leftSum === rightSum) {
    return mid;
  }
  mid += 1;

  for (; mid < nums.length; mid++) {
    leftSum += nums[mid - 1];
    rightSum -= nums[mid];

    if (leftSum === rightSum) {
      return mid;
    }
  }

  return -1;
};
// @lc code=end
