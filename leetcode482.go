package main

///482. License Key Formatting
// author: Phan Chí Hiếu
// github: https://github.com/Phanhieu1221
/*https://leetcode.com/problems/license-key-formatting/*/
func licenseKeyFormatting(S string, K int) string {
	result := []byte{}
	sb := []byte(S)
	count := 0
	for i := len(sb) - 1; i >= 0; i-- {
		if sb[i] == '-' {
			continue
		}
		if sb[i] >= 'a' && sb[i] <= 'z' {
			result = append([]byte{sb[i] - 32}, result...)
		} else {
			result = append([]byte{sb[i]}, result...)
		}
		count++
		if count == K && i > 0 {
			result = append([]byte{'-'}, result...)
			count = 0
		}
	}
	if len(result) > 1 && result[0] == '-' {
		result = result[1:]
	}
	return string(result)
}
