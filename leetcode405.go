package main

/// 405. Convert a Number to Hexadecimal
/*Given an integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.

All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

Note: You are not allowed to use any built-in library method to directly solve this problem.*/
func toHex(num int) string {
	result := ""
	tmp := "01234566789abcdef"
	if num == 0 {
		return "0"
	}
	if num < 0 {
		num = -num
		num ^= 0xffffffff
		num += 1
	}
	for num > 0 {
		result = string(tmp[num%16]) + result
		num = num / 16
	}
	return result

}
