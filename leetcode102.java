import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
/// 102. Binary Tree Level Order Traversal
// author: Phan Chí Hiếu
// github: https://github.com/Phanhieu1221
/*https://leetcode.com/problems/binary-tree-level-order-traversal */
 /* Definition for a binary tree node.*/
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
 

class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if(root == null) {
            return result;
        }
        LinkedList<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while(!queue.isEmpty()) {
            int size = queue.size();
            ArrayList<Integer> l = new ArrayList<>(size);
            for(int i = 0; i< size; i++) {
                TreeNode n = queue.remove();
                l.add(n.val);
                if(n.left != null) 
                    queue.add(n.left);
                if(n.right != null)
                    queue.add(n.right);
                result.add(l);
            }
        }
        return result;

    }

}