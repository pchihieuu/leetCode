package main

// Single Number
//author: Phan Chi Hieu
func singleNumber(nums []int) int {
	result := 0
	for _, val := range nums {
		result ^= val
	}
	return result

}
