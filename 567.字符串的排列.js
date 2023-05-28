/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let need = {};
  let window = {};

  for (let i = 0; i < s1.length; i++) {
    need[s1[i]] = (need[s1[i]] || 0) + 1;
  }

  let left = (right = valid = 0);

  while (right < s2.length) {
    let c = s2[right];
    right++;

    if (need[c] !== undefined) {
      window[c] = (window[c] || 0) + 1;

      if (window[c] === need[c]) {
        valid++;
      }
    }

    while (right - left >= s1.length) {
      if (valid === Object.keys(need).length) {
        return true;
      }

      let d = s2[left];
      left++;

      if (need[d] !== undefined) {
        if (window[d] === need[d]) {
          valid--;
        }
        window[d]--;
      }
    }
  }
  return false;
};
// @lc code=end
