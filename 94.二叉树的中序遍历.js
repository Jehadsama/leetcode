/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/** 解法1
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function (root) {
//   if (!root) {
//     return [];
//   }
//   let left = inorderTraversal(root.left);
//   let right = inorderTraversal(root.right);
//   return [...left, root.val, ...right];
// };

/** 解法2
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const arr = [];

  const fn = (n) => {
    if (!n) {
      return;
    }
    fn(n.left);
    arr.push(n.val);
    fn(n.right);
  };
  fn(root);
  return arr;
};
// @lc code=end
