package main

/// 401. Binary Watch
/* A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.

For example, the below binary watch reads "4:51".*/

import (
	"fmt"
)

func readBinaryWatch(num int) []string {
	result := []string{}
	for h := 0; h < 12; h++ {
		countOneHour := helper(h)
		for m := 0; m < 60; m++ {
			if countOneHour+helper(m) == num {
				s := fmt.Sprintf("%d:%02d", h, m)
				result = append(result, s)
			}

		}
	}
	return result

}
func helper(n int) int {
	result := 0
	for n > 0 {
		result = n % 2
		n = n / 2
	}
	return result
}
