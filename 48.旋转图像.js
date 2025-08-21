/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // const n = matrix.length;
  // for (let i = 0; i < Math.floor(n / 2); ++i) {
  //   for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
  //     const temp = matrix[i][j];
  //     matrix[i][j] = matrix[n - j - 1][i];
  //     matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
  //     matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
  //     matrix[j][n - i - 1] = temp;
  //   }
  // }

  const n = matrix.length;
  // 水平翻转
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - i][j];
      matrix[n - 1 - i][j] = temp;
    }
  }
  // 对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};
// @lc code=end
