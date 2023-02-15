package main

/// 447. Number of Boomerangs
/*https://leetcode.com/problems/number-of-boomerangs/*/
func numberOfBommerangs(points [][]int) int {
	result := 0
	for i := 0; i < len(points); i++ {
		distanceMap := make(map[int]int)
		for j := 0; j < len(points); j++ {
			if i != j {
				distance := distance(points[i], points[j])
				result += distanceMap[distance] * 2
				distanceMap[distance]++
			}
		}
	}
	return result

}
func distance(p1, p2 []int) int {
	return (p1[0]-p2[0])*(p1[0]-p2[0]) + (p1[1]-p2[1])*(p1[1]-p2[1])
}
