/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let Dq = class {
    constructor() {
      this.window = [];
    }

    getMaxValue() {
      return this.window[0];
    }

    pop(n) {
      if (this.window[0] === n) {
        this.window.shift();
      }
    }

    push(n) {
      while (this.window.length && this.window[this.window.length - 1] < n) {
        this.window.pop();
      }
      this.window.push(n);
    }
  };

  const window = new Dq();
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      window.push(nums[i]);
    } else {
      window.push(nums[i]);
      result.push(window.getMaxValue());
      window.pop(nums[i - k + 1]);
    }
  }
  return result;
};
// @lc code=end
