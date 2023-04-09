/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const m = {};
  const str2nstr = (str) => {
    let arr = new Array(26).fill(0);
    for (let c of str) {
      arr[c.charCodeAt() - 97]++;
    }
    return arr.join('#');
  };

  for (let str of strs) {
    const nstr = str2nstr(str);

    if (m[nstr] === undefined) {
      m[nstr] = [];
    }
    m[nstr].push(str);
  }

  return Object.values(m);
};
// @lc code=end
