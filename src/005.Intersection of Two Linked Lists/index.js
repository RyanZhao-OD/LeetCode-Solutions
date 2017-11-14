/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const getListLength = head => {
    let length = 0;
    while (head) {
        length++;
        head = head.next;
    }
    return length;
};

const forwardHead = (length, head) => {
    while (length && head) {
        head = head.next;
        length--;
    }
    return head;
};

var getIntersectionNode = function(headA, headB) {
    const lengthHeadA = getListLength(headA);
    const lengthHeadB = getListLength(headB);

    let newHead1 = null;
    let newHead2 = null;
    if (lengthHeadA > lengthHeadB) {
        newHead1 = forwardHead(lengthHeadA - lengthHeadB, headA);
        newHead2 = headB;
    } else {
        newHead1 = forwardHead(lengthHeadB - lengthHeadA, headB);
        newHead2 = headA;
    }

    while (newHead1 && newHead2) {
        if (newHead1 === newHead2) {
            return newHead1;
        }
        newHead1 = newHead1.next;
        newHead2 = newHead2.next;
    }
    return null;
};