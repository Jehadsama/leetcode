/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const rows = matrix.length;
  const lines = matrix[0].length;

  if (rows + lines === 0) return [];

  const total = rows * lines;
  //   const directions = ['right', 'down', 'left', 'up'];
  let direction = 'right';
  const record = {};
  const results = [];
  let i = 0;
  let j = 0;
  while (results.length != total) {
    if (!record[`${i},${j}`]) {
      results.push(matrix[i][j]);
      record[`${i},${j}`] = true;
    }

    if (direction === 'right') {
      if (j < lines - 1 && !record[`${i},${j + 1}`]) {
        j++;
      } else {
        direction = 'down';
      }
    }

    if (direction === 'down') {
      if (i < rows - 1 && !record[`${i + 1},${j}`]) {
        i++;
      } else {
        direction = 'left';
      }
    }

    if (direction === 'left') {
      if (j > 0 && !record[`${i},${j - 1}`]) {
        j--;
      } else {
        direction = 'up';
      }
    }

    if (direction === 'up') {
      if (i > 0 && !record[`${i - 1},${j}`]) {
        i--;
      } else {
        direction = 'right';
      }
    }
  }

  return results;
};
// @lc code=end
