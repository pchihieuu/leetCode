import java.util.Stack;
/* 230. Kth Smallest Element in a BST
 * author: Phan Chí Hiếu
 */
class Solution {
    public int kthSmallest(TreeNode root, int k) {
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode p = root;
        while(p != null || stack.size() > 0) {
            if(p != null) {
                stack.push(p);
                p = p.left;
            } else {
                TreeNode e = stack.pop();
                k--;
                if(k == 0) {
                    return e.val;
                }
                p = e.right;
            }
        }
        return 0;
    }

    
}
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(){}
    TreeNode(int val) {
        this.val = val;
    }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

}
