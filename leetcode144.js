/**
 * @param {Node} root
 * @return {Node}
 */
var preorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let node = root;
    while (node || stack.length) {
        while (node) {
            result.push(node.val);
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        node = node.right;
    }
    return result;
};