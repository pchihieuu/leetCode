package main

//242. Valid Anagram
//author: Phan Chi Hieu
func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	tmp := [26]int{}
	for i := 0; i < len(s); i++ {
		tmp[s[i]-'a']++
	}
	for i := 0; i < len(t); i++ {
		tmp[t[i]-'a']--
		if tmp[t[i]-'a'] < 0 {
			return false
		}
	}
	return true
}
