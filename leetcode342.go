package main

/// 342. Power of Four
/* Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.*/
func isPowerOfFour(n int) bool {
	return n == 1 || n == 1<<2 || n == 1<<4 || n == 1<<6 || n == 1<<8 || n == 1<<10 || n == 1<<12 || n == 1<<14 || n == 1<<16 || n == 1<<18 || n == 1<<20 || n == 1<<22 || n == 1<<24 || n == 1<<26 || n == 1<<28 || n == 1<<30 || n == 1<<32
}
