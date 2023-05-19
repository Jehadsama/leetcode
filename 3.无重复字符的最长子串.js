/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //   let window = {};
  //   let left = 0,
  //     right = 0,
  //     res = 0;
  //   while (right < s.length) {
  //     let c = s[right];
  //     right++;
  //     // 进行窗口内数据的一系列更新
  //     window[c] = (window[c] || 0) + 1;
  //     // 判断左侧窗口是否要收缩
  //     while (window[c] > 1) {
  //       let d = s[left];
  //       left++;
  //       // 进行窗口内数据的一系列更新
  //       window[d] = window[d] - 1;
  //     }
  //     // 在这里更新答案
  //     res = Math.max(res, right - left);
  //   }
  //   return res;

  if (s.length <= 1) {
    return s.length;
  }

  let m = {};
  let left = (right = maxLength = 0);

  while (right < s.length) {
    let c = s[right]; // current char

    if (!(m[c] === undefined || m[c] < left)) {
      left = m[c] + 1;
    }
    m[c] = right;

    maxLength = Math.max(maxLength, right - left + 1);
    right++;

    // if (m[c] !== undefined) {
    //   left = m[c] + 1;
    //   maxLength = maxLength > len ? maxLength : len;
    //   len = right - left + 1;
    // } else {
    //   len++;
    // }
    // m[c] = right;
    // right++;
  }
  return maxLength;
};
// @lc code=end
