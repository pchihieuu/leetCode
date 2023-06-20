/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    let res = []
    let queue = [root]
    while (queue.length) {
        let size = queue.length
        let level = []
        for (let i = 0; i < size; i++) {
        let node = queue.shift()
        level.push(node.val)
        queue.push(...node.children)
        }
        res.push(level)
    }
    return res
};