package main

//204. Count Primes
//author: Phan Chi Hieu
func countPrimes(n int) int {
	primes := make([]bool, n)
	for i := 0; i < len(primes); i++ {
		primes[i] = true
	}
	for i := 2; i*i < n; i++ {
		if primes[i] {
			for j := i; j*i < n; j++ {
				primes[i*j] = false
			}
		}
	}
	rersult := 0
	for i := 2; i < n; i++ {
		if primes[i] {
			rersult++
		}
	}
	return rersult
}
