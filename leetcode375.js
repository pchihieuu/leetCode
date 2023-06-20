/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    let dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = n - 1; i > 0; i--) {
        for (let j = i + 1; j <= n; j++) {
            dp[i][j] = Number.MAX_SAFE_INTEGER;
            for (let k = i; k < j; k++) {
                dp[i][j] = Math.min(dp[i][j], k + Math.max(dp[i][k - 1], dp[k + 1][j]));
            }
        }
    }
    return dp[1][n];  
};