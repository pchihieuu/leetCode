package main

func findTheDifference(s string, t string) byte {
	result := byte(0)
	for i := range s {
		result ^= s[i]

	}
	for i := range t {
		result ^= t[i]
	}
	return result
}
