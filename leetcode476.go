package main

///476. Number Complement
// author: Phan Chí Hiếu
// github: https://github.com/Phanhieu1221
/*https://leetcode.com/problems/number-complement/*/
func findComplement(num int) int {
	tmp := 1
	for num > tmp {
		tmp *= 2
	}
	if tmp == num {
		return tmp - 1
	}
	return tmp - 1 - num
}
