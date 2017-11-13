// https://leetcode.com/problems/partition-list/description/
// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
//
//     You should preserve the original relative order of the nodes in each of the two partitions.
//
//     For example,
//     Given 1->4->3->2->5->2 and x = 3,
// return 1->2->2->4->3->5.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var partition = function(head, x) {
    // 两个临时节点
    let node1 = new ListNode(0);
    let node2 = new ListNode(0);
    let p1 = node1;
    let p2 = node2;
    while (head) {
        if (head.val < x) {
            p1.next = head;
            p1 = p1.next;
        } else {
            p2.next = head;
            p2 = p2.next;
        }
        head = head.next;
    }
    p2.next = null;
    p1.next = node2.next;
    return node1.next;
};