package main

///461. Hamming Distance
// author: Phan Chí Hiếu
// github: https://github.com/Phanhieu1221
/*https://leetcode.com/problems/hamming-distance/*/
func hammingDistance(x int, y int) int {
	result := 0
	for x > 0 && y > 0 {
		if x%2 != y%2 {
			result++
		}
		x = x / 2
		y = y / 2
	}
	for x > 0 {
		result = result + x%2
		x = x / 2
	}
	for y > 0 {
		result = result + y%2
		y = y / 2
	}
	return result
}
