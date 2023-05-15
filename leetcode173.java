import java.util.Stack;
/* 173. Binary Search Tree Iterator
 * author: Phan Chí Hiếu
 */
class TreeNode {
    /*Definition for a binary tree node. */
    int val;
    TreeNode left;
    TreeNode right;
    //Default constructor
    TreeNode() {

    }
    // Constructor with 1 fields
    TreeNode(int val) {
        this.val = val;

    }
    //Constructer with 3 fields
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
class BSTIterator {
    Stack<TreeNode> s = new Stack<TreeNode>();
    
    public BSTIterator(TreeNode root) {
        while(root != null) {
            s.push(root);
            root = root.left;
        }

    }
    /*
     * @return whether we have a next smallest number
     */
    public boolean hasNext() {
        return s.size() != 0;
    }
    /*
     * @return the next smallest number
     */
    public int next() {
        TreeNode  result = s.pop();
        TreeNode  node =  result.right;
        while(node != null) {
            s.push(node);
            node = node.left;

        }
        return  result.val;
    }
    
}
/**
 * Your BSTIterator will be called like this:
 * BSTIterator i = new BSTIterator(root);
 * while (i.hasNext()) v[f()] = i.next();
 */
