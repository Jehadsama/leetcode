/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

/**
 * 解法1: 动态规划
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//   let res = 0;
//   let len = height.length;
//   if (len < 3) {
//     return 0;
//   }
//   let leftMax = new Array(len);
//   let rightMax = new Array(len);
//   leftMax[0] = height[0];
//   rightMax[len - 1] = height[len - 1];
//   for (let i = 1; i < len; i++) {
//     leftMax[i] = Math.max(height[i], leftMax[i - 1]);
//   }
//   // 从右向左计算 r_max
//   for (var i = len - 2; i >= 0; i--) {
//     rightMax[i] = Math.max(height[i], rightMax[i + 1]);
//   }
//   for (let i = 0; i < len; i++) {
//     res += Math.min(leftMax[i], rightMax[i]) - height[i];
//   }
//   return res;
// };

/**
 * 解法2: 单调栈
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//     let ans = 0;
//     const stack = [];
//     const n = height.length;
//     for (let i = 0; i < n; ++i) {
//       while (stack.length && height[i] > height[stack[stack.length - 1]]) {
//         const top = stack.pop();
//         if (!stack.length) {
//           break;
//         }
//         const left = stack[stack.length - 1];
//         const currWidth = i - left - 1;
//         const currHeight = Math.min(height[left], height[i]) - height[top];
//         ans += currWidth * currHeight;
//       }
//       stack.push(i);
//     }
//     return ans;
//   };

// @lc code=start
/**
 * 解法3: 双指针
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0;
  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (height[left] < height[right]) {
      ans += leftMax - height[left];
      ++left;
    } else {
      ans += rightMax - height[right];
      --right;
    }
  }
  return ans;
};
// @lc code=end
