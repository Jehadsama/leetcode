/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;

  const total = rows * cols;
  if (total === 0) return mat;

  let i = 0;
  let j = 0;

  const results = [];
  while (results.length !== total) {
    results.push(mat[i][j]);

    if ((i + j) % 2 === 0) {
      if (j < cols - 1) {
        j++;
        if (i > 0) i--;
      } else {
        i++;
      }
    } else {
      if (i < rows - 1) {
        i++;
        if (j > 0) j--;
      } else {
        j++;
      }
    }
  }

  return results;
};
// @lc code=end
