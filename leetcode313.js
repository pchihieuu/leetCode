/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    let m = primes.length;
    let dp = new Array(n + 1).fill(0);
    let pointers = new Array(m).fill(1);
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        let min = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < m; j++) {
            min = Math.min(min, dp[pointers[j]] * primes[j]);
        }
        dp[i] = min;
        for (let j = 0; j < m; j++) {
            if (min === dp[pointers[j]] * primes[j]) {
                pointers[j]++;
            }
        }
    }
    return dp[n];
};