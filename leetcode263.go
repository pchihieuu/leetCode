package main

//263. Ugly Number
//author: Phan Chi Hieu
func isUgly(n int) bool {
	if n < 1 {
		return false
	}
	for _, v := range [3]int{2, 3, 5} {
		for n%v == 0 {
			n = n / v
		}
	}
	return n == 1
}
