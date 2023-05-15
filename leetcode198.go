package main

//198. House Robber
//author: Phan Chi Hieu
func rob(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	temp := make([]int, len(nums))
	for i := 0; i < len(nums); i++ {
		if i == 0 {
			temp[i] = nums[i]
		} else if i == 1 {
			temp[i] = max(nums[i-1], nums[i])
		} else {
			temp[i] = max(temp[i-1], temp[i-2]+nums[i])
		}
	}
	return temp[len(temp)-1]
}
func onMax(a, b int) int {
	if a > b {
		return a
	}
	return b
}
