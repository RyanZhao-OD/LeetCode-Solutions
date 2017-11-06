/**
 * 101
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
const isSymmetricRecur = (left, right) => {
    if (left === null || right === null)
        return left === right;
    if (left.val !== right.val)
        return false;
    return isSymmetricRecur(left.left, right.right) && isSymmetricRecur(left.right, right.left);
};

var isSymmetric = function(root) {
    return root === null || isSymmetricRecur(root.left, root.right);
};