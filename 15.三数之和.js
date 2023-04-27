/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const len = nums.length;

  if (nums[0] > 0 || nums[len - 1] < 0) return [];

  const res = [];

  for (let i = 0; i < len; i++) {
    let currentValue = nums[i];
    if (currentValue > 0) break;

    if (i > 0 && nums[i - 1] === currentValue) continue;

    let leftIndex = i + 1;
    let rightIndex = len - 1;

    while (leftIndex < rightIndex) {
      let leftValue = nums[leftIndex];
      let rightValue = nums[rightIndex];
      let sum = currentValue + leftValue + rightValue;
      if (sum < 0) {
        leftIndex++;
      } else if (sum > 0) {
        rightIndex--;
      } else {
        res.push([currentValue, leftValue, rightValue]);
        while (
          leftIndex < rightIndex &&
          nums[leftIndex] === nums[leftIndex + 1]
        ) {
          leftIndex++;
        }
        while (
          leftIndex < rightIndex &&
          nums[rightIndex] === nums[rightIndex - 1]
        ) {
          rightIndex--;
        }
        leftIndex++;
        rightIndex--;
      }
    }
  }
  return res;
};
// @lc code=end
