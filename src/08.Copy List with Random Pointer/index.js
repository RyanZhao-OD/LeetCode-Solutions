// https://leetcode.com/problems/copy-list-with-random-pointer/description/

// A linked list is given such that each node contains an additional random pointer
// which could point to any node in the list or null.

// Return a deep copy of the list.

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

class RandomListNode {
    constructor(label) {
        this.label = label;
        this.next = this.random = null;
    }
}

var copyRandomList = function(head) {
    let randomMap = new Map();
    let index = 0;
    let resultNode = head;
    let next = head.next;

    randomMap.set(index, head.random);

    while (next) {
        resultNode.next = new RandomListNode(next.label);
        randomMap.set(index, head.random);
        next = head.next;
        index++;
    }
};