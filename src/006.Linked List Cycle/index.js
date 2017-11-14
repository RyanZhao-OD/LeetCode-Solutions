// https://leetcode.com/problems/linked-list-cycle/description/

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

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 用set判断
// 或者用2个快慢指针实现
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while (fast) {
        slow = slow.next;
        fast = fast.next;
        if (!fast) {
            return false;
        }
        fast = fast.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
};