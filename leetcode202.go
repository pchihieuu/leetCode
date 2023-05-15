package main

//Happy Number
//author: Phan Chi Hieu
func isHappy(n int) bool {
	m := make(map[int]bool)
	for {
		if m[n] {
			return false
		}
		m[n] = true
		n = getSum(n)
		if n == 1 {
			return true
		}
	}
}
func getSum(num int) int {
	sum := 0
	for num != 0 {
		sum += (num % 10) * (num % 10)
		num = num / 10
	}
	return sum
}
