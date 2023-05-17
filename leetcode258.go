package main

//258. Add Digits
//author: Phan Chi Hieu
func addDigits(num int) int {
	if num < 10 {
		return num
	}
	r := num % 9
	if r == 0 {
		return 9
	}
	return r
}
