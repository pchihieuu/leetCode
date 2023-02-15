package main

///350. Intersection of Two Arrays II

/*Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.*/
func intersect(nums1 []int, nums2 []int) []int {
	var result []int
	m := make(map[int]int)
	for _, n := range nums1 {
		m[n]++
	}
	for _, n := range nums1 {
		if m[n] > 0 {
			result = append(result, n)
			m[n]--
		}
	}
	return result
}
