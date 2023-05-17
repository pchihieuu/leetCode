package main

//231. Power of Two
//author: Phan Chi Hieu

func isPowerOfTwo(n int) bool {
	if n == 0 {
		return false
	}
	return n&-n == n
}
