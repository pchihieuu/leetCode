package main

/// 434. Number of Segments in a String
/*https://leetcode.com/problems/number-of-segments-in-a-string/*/
func countSegments(s string) int {
	if len(s) == 0 {
		return 0
	}
	result := 1
	for i := 0; i < len(s); i++ {
		if i == 0 && s[i] == ' ' {
			result = 0
		}
		if i < len(s)-1 && s[i] == ' ' && s[i+1] != ' ' {
			result++
		}
	}
	return result
}
