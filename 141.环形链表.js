/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  //   const m = {};

  //   let n = head;

  //   while (n) {
  //     if (m[n.val]) {
  //       return true;
  //     }
  //     m[n.val] = true;
  //     n = n.next;
  //   }
  //   return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) {
      return true;
    }
  }
  return false;
};
// @lc code=end

// 解题思路： 快慢指针，每轮循环快指针前进2次，慢指针前进1次
