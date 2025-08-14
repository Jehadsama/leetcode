// 你需要实现贪吃蛇的移动逻辑，具体要求如下：

// 根据给定的方向移动蛇头
// 如果蛇头与食物位置重合，蛇身应该增长
// 你可以假设蛇不会超出网格边界或吃到自己，因此不需要处理游戏结束逻辑
// 完成 move 函数后，点击"Begin"按钮来测试你的代码
// 输入
// snake 是一个 Point[] 数组，表示贪吃蛇的身体，数组的每个元素是一个 Point 对象，表示贪吃蛇的一个身体部位在网格中的位置。蛇头位于数组的第一个位置（索引0）。
// direction 是一个字符串，表示贪吃蛇的移动方向，取值为 'left'、'right'、'up' 或 'down'。
// foodPosition 是一个 Point 对象，表示食物在网格中的位置。
// 示例1：
// snake = [Point(0, 0), Point(1, 0), Point(2, 0)]
// direction = 'left'
// foodPosition = Point(4, 5)

// // 你应当就地修改蛇数组为:
// [Point(-1, 0), Point(0, 0), Point(1, 0)]
// 解释：蛇头在(0, 0)，向左移动一步，蛇身跟随蛇头移动。因此得到新的蛇数组 [Point(-1, 0), Point(0, 0), Point(1, 0)]。

// 示例2：
// snake = [Point(0, 0), Point(0, 1), Point(1, 1)]
// direction = 'down'
// foodPosition = Point(4, 5)

// // 你应当就地修改蛇数组为:
// [Point(0, -1), Point(0, 0), Point(0, 1)]
// 解释：蛇头在(0, 0)，向下移动一步，蛇身跟随蛇头移动。因此得到新的蛇数组 [Point(0, -1), Point(0, 0), Point(0, 1)]。

// 参数说明：
// Point 是网格中的坐标，x表示列，y表示行
// 可以使用标准的数组方法如 unshift()、pop() 等
// 注意：请直接修改传入的数组实例，无需返回新的数组。

// // Point is the coordinate in the grid
// // x is the column, y is the row
// class Point {
//   x: number
//   y: number
// }

/**
 * @param {Point[]} snake, the snake is an array of points
 * @param {string} direction, 'left', 'right', 'up' or 'down'
 * @param {Point} foodPosition, the food position in the grid
 */
var move = function (snake, direction, foodPosition) {
  let _pre = { x: snake[0].x, y: snake[0].y };
  let _cur = { x: snake[0].x, y: snake[0].y };
  let isEaten = false;
  for (let i = 0; i < snake.length; i++) {
    if ((i = 0)) {
      switch (direction) {
        case 'left':
          snake[0].x -= 1;
          break;
        case 'right':
          snake[0].x += 1;
          break;
        case 'up':
          snake[0].y += 1;
          break;
        case 'down':
          snake[0].y -= 1;
          break;
        default:
          break;
      }
    } else {
      _cur.x = snake[i].x;
      _cur.y = snake[i].y;
      snake[i].x = _pre.x;
      snake[i].y = _pre.y;

      _pre.x = _cur.x;
      _pre.y = _cur.y;
    }
  }

  if (snake[0].x === foodPosition.x && snake[0].y === foodPosition.y) {
    const _tail = {
      x: snake[snake.length - 1].x,
      y: snake[snake.length - 1].y,
    };

    switch (direction) {
      case 'left':
        _tail.x += 1;
        break;
      case 'right':
        _tail.x -= 1;
        break;
      case 'up':
        _tail.y -= 1;
        break;
      case 'down':
        _tail.y += 1;
        break;
      default:
        break;
    }
    snake.push(_tail);
  }

  return snake;
};
