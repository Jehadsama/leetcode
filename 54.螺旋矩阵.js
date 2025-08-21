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
  const record = {};
  const results = [];
  const directions = ['right', 'down', 'left', 'up'];
  let directionIndex = 0;
  let i = 0;
  let j = 0;

  while (results.length != total) {
    if (!record[`${i},${j}`]) {
      results.push(matrix[i][j]);
      record[`${i},${j}`] = true;
    }

    if (directions[directionIndex] === 'right') {
      if (j < lines - 1 && !record[`${i},${j + 1}`]) {
        j++;
      } else {
        directionIndex = (directionIndex + 1) % 4;
      }
    }
    if (directions[directionIndex] === 'down') {
      if (i < rows - 1 && !record[`${i + 1},${j}`]) {
        i++;
      } else {
        directionIndex = (directionIndex + 1) % 4;
      }
    }
    if (directions[directionIndex] === 'left') {
      if (j > 0 && !record[`${i},${j - 1}`]) {
        j--;
      } else {
        directionIndex = (directionIndex + 1) % 4;
      }
    }
    if (directions[directionIndex] === 'up') {
      if (i > 0 && !record[`${i - 1},${j}`]) {
        i--;
      } else {
        directionIndex = (directionIndex + 1) % 4;
      }
    }
  }

  return results;
};
// @lc code=end
