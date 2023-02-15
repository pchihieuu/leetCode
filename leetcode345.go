package main

/// 345. Reverse Vowels of a String
/*Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.*/
func reverseVowel(s string) string {
	tmp := []byte(s)
	i := 0
	j := len(s) - 1
	for i < j {
		if !isVowel(s[i]) {
			i++
			continue
		}
		if !isVowel(s[j]) {
			j--
			continue
		}
		tmp[i], tmp[j] = tmp[j], tmp[i]
		i++
		j--
	}
	return string(tmp)

}
func isVowel(c byte) bool {
	return c == 'a' || c == 'e' || c == 'i' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'U'
}
