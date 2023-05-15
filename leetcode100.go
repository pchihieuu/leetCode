package main

//Same Tree
//author: Phan Chi Hieu

func isSameTree(p *TreeNode, q *TreeNode) bool {

	if p == nil && q != nil || p != nil && q == nil {
		return false
	}
	if p == nil && q == nil {
		return true
	}
	if p.Val != q.Val {
		return false
	}
	ret := isSameTree(p.Left, q.Left)
	if !ret {
		return false
	}
	return isSameTree(p.Right, q.Right)
}
