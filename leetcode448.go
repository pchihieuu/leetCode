package main

import "math"

///448. Find All Numbers Disappeared in an Array
/*https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/*/
func findDisappearedNumbers(nums []int) []int {
	result := []int{}
	for i := 0; i < len(nums); i++ {
		index := int(math.Abs(float64(nums[i])) - 1)
		if nums[index] > 0 {
			nums[index] = -nums[index]
		}
	}
	for i := 0; i < len(nums); i++ {
		if nums[i] > 0 {
			result = append(result, i+1)
		}
	}
	return result
}
