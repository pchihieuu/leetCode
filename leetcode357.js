/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    var dp = [1, 10];
    var sum = [1, 11];
    for (var i = 2; i <= n; i++)  {
        dp[i] = sum[i - 1] + (10 - i) * (dp[i - 1]);
        sum[i] = sum[i - 1] + dp[i];
    }
    return dp[n];
};