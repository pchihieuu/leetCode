package main

/// 326. Power Of Three
/*Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3x.*/
func isPowerOfThree(n int) bool {
	if n == 1 {
		return true
	}
	if n < 3 {
		return false
	}
	return 1162261467%n == 0
}
