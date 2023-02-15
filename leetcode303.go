package main

///303. Range Sum Query - Immutable
/* Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).*/
type NumArray struct {
	arr []int
}

func Constructor(nums []int) NumArray {
	return NumArray{arr: nums}

}
func (this *NumArray) SumRange(left int, right int) int {
	result := 0
	k := 0
	for k = left; k <= right; k++ {
		result += this.arr[k]
	}
	return result
}
