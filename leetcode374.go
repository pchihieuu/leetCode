package main

func guessNumb(n int) int {
	l, r := 1, n
	for l < r {
		m := l + (r-l)/2
		if guess(m) == 1 {
			l = m + 1
		} else {
			r = m
		}

	}
	return l

}
