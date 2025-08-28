/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let sortArray = function (nums) {
  let gap = Math.floor(nums.length / 2);

  while (gap > 0) {
    for (let i = gap; i < nums.length; i++) {
      let temp = nums[i];

      let j = i;

      while (j >= gap && nums[j - gap] > temp) {
        nums[j] = nums[j - gap];
        j -= gap;
      }

      nums[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  return nums;
};
// @lc code=end
