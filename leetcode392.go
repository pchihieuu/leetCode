package main

func isSubsequence(s string, t string) bool {
	if len(s) == 0 {
		return true
	}
	for i, j := 0, 0; j < len(t); j++ {
		if s[i] == t[j] {
			i++
		}
		if i == len(s) {
			return true
		}

	}
	return false
}
