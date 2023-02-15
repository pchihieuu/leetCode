package main

/*https://leetcode.com/problems/third-maximum-number/ */
import (
	"math"
)

///414. Third Maximum Number

func thirdMax(nums []int) int {
	first, second, third := math.MinInt64, math.MinInt64, math.MinInt64
	for _, v := range nums {
		if v == first || v == second || v == third {
			continue
		}
		if first == math.MinInt64 || first < v {
			third = second
			second = first
			first = v
		} else if second == math.MinInt64 || second < v {
			third = second
			second = v
		} else if third == math.MinInt64 || third < v {
			third = v
		}

	}
	if third == math.MinInt64 {
		return first
	}
	return third
}
