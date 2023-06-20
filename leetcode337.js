/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    let map = new Map()
    return helper(root, map)
};

var helper = function(root, map) {
    if (!root) 
        return 0
    if (map.has(root)) 
        return map.get(root)
    let val = 0
    if (root.left) {
        val += helper(root.left.left, map) + helper(root.left.right, map)
    }
    if (root.right) {
        val += helper(root.right.left, map) + helper(root.right.right, map)
    }
    val = Math.max(val + root.val, helper(root.left, map) + helper(root.right, map))
    map.set(root, val)
    return val
};