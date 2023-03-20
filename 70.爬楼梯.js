/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * 解法1
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//   const dps = new Array(n).fill(0);
//   const dp = (n) => {
//     if (n <= 2) {
//       return n;
//     }
//     if (dps[n] > 0) {
//       return dps[n];
//     }
//     dps[n] = dp(n - 1) + dp(n - 2);
//     return dps[n];
//   };
//   return dp(n);
// };

/**
 * 解法2
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 1; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};

// @lc code=end
