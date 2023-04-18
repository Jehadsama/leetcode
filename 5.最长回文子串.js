/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const getPalindrome = (str, left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return str.substring(left + 1, right);
  };

  let res = '';
  for (let i = 0; i < s.length; i++) {
    let s1 = getPalindrome(s, i, i);
    let s2 = getPalindrome(s, i, i + 1);

    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
};
// @lc code=end
