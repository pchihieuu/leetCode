public class leetcode98 {
    //98. Validate Binary Search Tree
    //author: Phan Chi Hieu
    public boolean isValidBST(TreeNode root) {
        if(root.left.val < root.val && root.right.val > root.val) {
            return true;
        }
        return false;
        
    }
}
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
