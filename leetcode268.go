package main

/// 268. Missing Number
/* Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.*/

func missingNumber(nums []int) int {
	sum := len(nums) * (len(nums) + 1) / 2
	sum2 := 0
	for i := 0; i < len(nums); i++ {
		sum2 += nums[i]

	}
	return sum - sum2
}
