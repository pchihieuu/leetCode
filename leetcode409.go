package main

/// 409. Longest Palindrome
/*https://leetcode.com/problems/longest-palindrome/*/
func longestPalidrome(s string) int {
	count := 0
	m := make(map[byte]bool)
	for i := 0; i < len(s); i++ {
		if m[s[i]] {
			count++
			delete(m, s[i])
		} else {
			m[s[i]] = true
		}
	}
	if len(m) > 0 {
		return count*2 + 1
	}
	return count * 2
}
