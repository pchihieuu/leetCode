package main

import "math"

/// 453. Minimum Moves to Equal Array Elements
// author: Phan Chí Hiếu
// github: https://github.com/Phanhieu1221
/*https://leetcode.com/problems/minimum-moves-to-equal-array-elements/*/
func minMoves(nums []int) int {
	min := math.MaxInt32
	sum := 0
	n := len(nums)

	for _, v := range nums {
		sum += v
		if min > v {
			min = v
		}
	}
	return sum - min*n
}

/*******************************************************************/
/****    m: số lần lập lại tối thiểu (result) <= cần tìm ?      ****/
/****    x: giá trị của tất cả phần tử sau khi lập (x)          ****/
/****    sum: tổng tất cả các phần tử trong mảng lúc đầu (V)    ****/
/****    n: độ dài của mảng (V                                  ****/
/****    min: phần tử nhỏ nhất trong mảng ban đầu(V)            ****/
/****    sum + m * (n - 1) = x * n                              ****/
/**** --------------------------------------------------------- ****/
/**** => m = x - min                                            ****/
/**** => m = [sum + m *(n - 1)] / n - min                       ****/
/**** => m = sum / n + [m * (n - 1)] / n - min                  ****/
/**** => m = sum / n + m -m / n - min                           ****/
/**** => m / n = sum / n - min                                  ****/
/**** => m = sum - min * n                                      ****/
/*******************************************************************/
