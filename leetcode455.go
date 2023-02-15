package main

import "sort"

///455. Assign Cookies
// author: Phan Chí Hiếu
// github: https://github.com/Phanhieu1221
/*https://leetcode.com/problems/assign-cookies/*/
func findContentChildren(g []int, s []int) int {
	sort.Ints(g)
	sort.Ints(s)
	result := 0
	i := 0
	j := 0
	for i < len(g) && j < len(s) {
		if g[i] <= s[j] {
			result++
			i++
		}
		j++
	}
	return result
}
