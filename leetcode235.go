package main

//235. Lowest Common Ancestor of a Binary Search Tree
//author: Phan Chi Hieu
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val   int
 *     Left  *TreeNode
 *     Right *TreeNode
 * }
 */

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	cur := root
	for {
		switch {
		case p.Val < cur.Val && q.Val < cur.Val:
			cur = cur.Left
		case p.Val > cur.Val && q.Val > cur.Val:
			cur = cur.Right
		default:
			return cur
		}
	}
	return root
}
