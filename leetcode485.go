package main

///485. Max Consecutive Ones
// author: Phan Chí Hiếu
// github: https://github.com/Phanhieu1221
/*https://leetcode.com/problems/max-consecutive-ones/*/
func findMaxConsecutiveOnes(nums []int) int {
	result := 0
	count := 0
	for _, v := range nums {
		if v == 1 {
			count++
		} else {
			count = 0
		}
		if count > result {
			result = count
		}
	}
	return result
}
