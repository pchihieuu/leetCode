/* 572. Subtree of Another Tree
 * author: Phan Chí Hiếu
 */
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    //Default Constructor
    TreeNode() {

    }
    //Constructor with 1 fields
    TreeNode(int val) {
        this.val = val;
    }
    //Constructor with 3 fields
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;

    }
}
class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if(root == null)
            return false;
        if(isSameTree(root, subRoot))
            return true;
        return isSubtree(root.left, subRoot)|| isSubtree(root.right, subRoot);
    }
    private boolean isSameTree(TreeNode p, TreeNode q) {
        if( p == null || q == null) {
            return p == q;
        }
        return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    
}
