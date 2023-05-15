import java.util.*;
public class leetcode199 {
    //199. Binary Tree Right Side View
    //author: Phan Chi Hieu
  public class TreeNode {
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
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> ans = new ArrayList<>();
        dfs(root, 0, ans);
        return ans;
    }
    private void dfs(TreeNode root, int depth, List<Integer> ans) {
        if (root == null)
            return;

        if (depth == ans.size())
            ans.add(root.val);
        dfs(root.right, depth + 1, ans);
        dfs(root.left, depth + 1, ans);
  }
}
}
