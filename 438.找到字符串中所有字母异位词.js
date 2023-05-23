/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let need = {};
  let window = {};
  let result = [];

  for (let i = 0; i < p.length; i++) {
    need[p[i]] = (need[p[i]] || 0) + 1;
  }

  let left = (right = valid = 0);

  while (right < s.length) {
    let c = s[right];

    right++;

    if (need[c] !== undefined) {
      window[c] = (window[c] || 0) + 1;

      if (window[c] === need[c]) {
        valid++;
      }
    }

    while (right - left >= p.length) {
      if (valid === Object.keys(need).length) {
        result.push(left);
      }
      let d = s[left];
      left++;

      if (need[d] !== undefined) {
        if (window[d] === need[d]) {
          valid--;
        }
        window[d]--;
      }
    }
  }
  return result;
};
// @lc code=end
