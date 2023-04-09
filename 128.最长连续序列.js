/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// /** 解法1
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function (nums) {
//   if (nums.length <= 1) {
//     return nums.length;
//   }

//   const numsSorted = nums.sort((a, b) => a - b);

//   let last = (key = numsSorted[0]);
//   const m = {
//     [key]: [last],
//   };

//   for (let i = 1; i < numsSorted.length; i++) {
//     const current = numsSorted[i];
//     if (last + 1 === current) {
//       m[key].push(current);
//     } else if (last === current) {
//       // no operation
//     } else {
//       key = current;
//       m[key] = [current];
//     }
//     last = current;
//   }

//   return Math.max(...Object.values(m).map((items) => items.length));
// };

// @lc code=start
/**
 *  解法2
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);

  let maxLength = 0;

  for (let n of nums) {
    if (set.has(n - 1)) {
      continue;
    }

    let currentN = n;
    let currentLength = 1;

    while (set.has(currentN + 1)) {
      currentN += 1;
      currentLength += 1;
    }
    maxLength = Math.max(maxLength, currentLength);
  }
  return maxLength;
};
// @lc code=end
