package main

//257. Binary Tree Paths
//author: Phan Chi Hieu
import (
	"strconv"
)

type TreeNode1 struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func binaryTreePaths(root *TreeNode) []string {
	result := []string{}
	if root == nil {
		return result
	}
	dfs(root, "", &result)
	return result

}
func dfs(root *TreeNode, path string, arr *[]string) {
	path += strconv.Itoa(root.Val)
	if root.Left == nil && root.Right == nil {
		*arr = append(*arr, path)
		return
	}
	if root.Left != nil {
		dfs(root.Left, path+"->", arr)
	}
	if root.Right != nil {
		dfs(root.Right, path+"->", arr)
	}
}
