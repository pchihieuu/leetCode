package main
/// 374. Guess Number Higher or Lower
/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0*/
func guess(num int) int;
 
func guessNumber(n int) int {
	l, r := 1, n
	for l < r {
		m := l + (r - l) / 2
		if guess(m) == 1 {
			l = m + 1
		} else {
			r = m
		}
	}
	return l
}