package main

//101. Symmetric Tree
//author: Phan Chi Hieu

/*Definition for a binary tree node.
type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}*/

func isSymmetric(root *TreeNode) bool {
	if root == nil {
		return true
	}
	return helper(root.Left, root.Right)
}

func helper(a, b *TreeNode) bool {
	if a == nil || b == nil {
		return a == b
	}
	if a.Val != b.Val {
		return false
	}
	return helper(a.Left, b.Right) && helper(a.Right, b.Left)
}
