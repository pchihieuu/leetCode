package main

import "strings"

/// 459. Repeated Substring Pattern
// author: Phan Chí Hiếu
// github: https://github.com/Phanhieu1221
/*https://leetcode.com/problems/repeated-substring-pattern/*/
func repeatedSubstringPattern(s string) bool {
	for i := len(s) / 2; i >= 1; i-- {
		if len(s)%i == 0 && strings.Repeat(s[:i], len(s)/i) == s {
			return true
		}
	}
	return false
}
