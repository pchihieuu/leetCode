/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let x = null;
    let y = null;
    let pre = null;
    const inorder = (node) => {
        if (node === null) {
            return;
        }
        inorder(node.left);
        if (pre !== null && pre.val > node.val) {
            y = node;
            if (x === null) {
                x = pre;
            } else {
                return;
            }
        }
        pre = node;
        inorder(node.right);
    }
    inorder(root);
    [x.val, y.val] = [y.val, x.val];
};