package main

import (
	"strconv"
)

/// 443. String Compression
/*https://leetcode.com/problems/string-compression/*/
func compress(chars []byte) int {
	scanner := 0
	write := 0
	length := len(chars)
	for scanner < length {
		chars[write] = chars[scanner]
		count := 0
		for scanner < length && chars[write] == chars[scanner] {
			count++
			scanner++
		}
		if count > 1 {
			for _, c := range []byte(strconv.Itoa(count)) {
				write++
				chars[write] = c
			}
		}
		write++
	}
	return write
}
