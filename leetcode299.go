package main

/// 299. Bulls and Cows
/* You are playing the Bulls and Cows game with your friend.
You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:
The number of "bulls", which are digits in the guess that are in the correct position.
The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.
The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.*/

import "fmt"

func getHint(serect string, guess string) string {
	b := 0
	c := 0
	tmp := make([]int, 10)
	for i := 0; i < len(serect); i++ {
		s := serect[i] - '0'
		g := guess[i] - '0'
		if s == g {
			b++
			continue
		}
		if tmp[s] < 0 {
			c++
		}
		if tmp[g] > 0 {
			c++
		}
		tmp[s]++
		tmp[g]--

	}
	return fmt.Sprintf("%dA%dB", b, c)
}
