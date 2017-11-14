/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var reverseList = function(head) {
    let newHead = null;
    // 只要不是空
    while (head) {
        let next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }
    return newHead;
};