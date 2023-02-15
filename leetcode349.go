package main

///349. Intersection of two array
/*Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.*/
func intersection(nums1 []int, nums2 []int) []int {
	var result []int
	m := make(map[int]bool)
	for _, n := range nums1 {
		m[n] = true
	}
	for _, n := range nums2 {
		if m[n] {
			result = append(result, n)
			m[n] = false
		}
	}
	return result
}
