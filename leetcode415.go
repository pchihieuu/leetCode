package main

/// 415. Add Strings
/*https://leetcode.com/problems/add-strings/*/
func addStrings(num1 string, num2 string) string {
	result := ""
	i := len(num1) - 1
	j := len(num2) - 1
	carry := byte(0)
	for i >= 0 || j >= 0 {
		sum := byte(0)
		if i >= 0 {
			sum += num1[i] - '0'
		}
		if j >= 0 {
			sum += num2[j] - '0'
		}
		sum += carry
		carry = sum / 10
		n := sum % 10
		result = string(n+'0') + result
		i--
		j--

	}
	if carry > 0 {
		result = string(carry+'0') + result
	}
	return result
}
