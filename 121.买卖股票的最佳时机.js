/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/** 解法1
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   if (prices.length === 0) {
//     return 0;
//   }
//   const temp = prices.slice(0, -1);
//   return Math.max(
//     prices[prices.length - 1] - Math.min(...temp),
//     maxProfit(temp)
//   );
// };

/** 解法2
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minprice = 10 ** 4;
  let maxprofit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i];
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice;
    }
  }
  return maxprofit;
};
// @lc code=end
