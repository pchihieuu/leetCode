import java.util.ArrayList;
import java.util.List;
/// 589. N-ary Tree Preorder Traversal
// author: Phan Chí Hiếu
// github: https://github.com/Phanhieu1221
/*https://leetcode.com/problems/n-ary-tree-preorder-traversal/ */
class Node {
    public int val;
    public List<Node> children;
    // Default constructer
    public Node() {

    }
    public Node(int _val){
        val = _val;
    }
    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
}
class Solution {
    List<Integer> result = new ArrayList<>();
    public List<Integer> preorder(Node root){
        checkTree(root);
        return result;
    }
    private void checkTree(Node root){
        if (root == null) return;
        result.add(root.val);
        for(Node node : root.children) {
            checkTree(node);
        }
    }
}