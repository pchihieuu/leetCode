package main

/// 441. Arranging Coins
/*https://leetcode.com/problems/arranging-coins/*/
func arrangeCoins(n int) int {
	result := 0
	count := 1
	for n >= count {
		n = n - count
		count++
		result++
	}
	return result
}
