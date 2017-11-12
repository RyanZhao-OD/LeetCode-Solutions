/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * 1 ≤ m ≤ n ≤ length of list.
 * @return {ListNode}
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var reverseBetween = function(head, m, n) {
    let reverseLength = n - m + 1;
    let prevHead = null;
    let result = head;

    while (head && --m) {
        head = head.next;
        prevHead = head;
    }

    let modifyListTail = head;
    let newHead = null;
    while (head && reverseLength) {
        let next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
        reverseLength--;
    }
    modifyListTail.next = head;

    if (prevHead) {
        prevHead.next = newHead;
    } else {
        result = newHead;
    }

    return result;

};