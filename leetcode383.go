package main

/// 383. Ransom Note
/* Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.*/
func canConstruct(ransomNote string, magazine string) bool {
	array := [26]int{}
	for i := 0; i < len(magazine); i++ {
		array[magazine[i]-'a']++
	}
	for i := 0; i < len(ransomNote); i++ {
		array[ransomNote[i]-'a']--
		if array[ransomNote[i]-'a'] < 0 {
			return false
		}
	}
	return true
}
