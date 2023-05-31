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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if( root === null ) return 0;
    return dfs(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};
function dfs( node, targetSum ){
    let res = 0;
    if( node === null ) return 0;
    if( node.val === targetSum ) res++;
    return res + dfs(node.left, targetSum-node.val) + dfs(node.right, targetSum-node.val);
}