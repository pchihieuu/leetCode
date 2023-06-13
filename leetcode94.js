/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var result = [];
    if(root === null) return result;
    result = result.concat(inorderTraversal(root.left));
    result.push(root.val);
    result = result.concat(inorderTraversal(root.right));
    return result;    
};