/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// /** 解法1
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// var removeElement = function (nums, val) {
//     if (nums.length === 0) return 0;

//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//       if (nums[left] !== val) {
//         left++;
//       } else {
//         if (nums[right] !== val) {
//           nums[left] = nums[right];
//           left++;
//         }
//         right--;
//       }
//     }
//     return right + 1;
//   };

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;

  let left = (right = 0);

  while (right < nums.length) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
  return left;
};
// @lc code=end
