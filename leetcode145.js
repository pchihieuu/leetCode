/**
 * @param {Node} root
 * @return {Node}
 */
var postorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let node = root;
    while (node || stack.length) {
        while (node) {
            result.unshift(node.val);
            stack.push(node);
            node = node.right;
        }
        node = stack.pop();
        node = node.left;
    }
    return result;
};