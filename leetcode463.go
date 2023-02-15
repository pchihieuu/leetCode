package main

///463. Island Perimeter
// author: Phan Chí Hiếu
// github: https://github.com/Phanhieu1221
/*https://leetcode.com/problems/island-perimeter/*/
func islandPerimeter(grid [][]int) int {
	result := 0
	m, n := len(grid), len(grid[0])
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == 1 {
				if i == 0 || grid[i-1][j] == 0 {
					result++
				}
				if i == m-1 || grid[i+1][j] == 0 {
					result++
				}
				if j == 0 || grid[i][j-1] == 0 {
					result++
				}
				if j == n-1 || grid[i][j+1] == 0 {
					result++
				}
			}

		}
	}
	return result
}
