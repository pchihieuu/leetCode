/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    var len = piles.length
    var dp = Array(len).fill(0).map(() => Array(len).fill(0))
    var sum = Array(len).fill(0)
    sum[len - 1] = piles[len - 1]
    for (var i = len - 2; i >= 0; i--) {
        sum[i] = sum[i + 1] + piles[i]
    }
    for (var i = len - 1; i >= 0; i--) {
        for (var m = 1; m <= len; m++) {
            if (i + 2 * m >= len) {
                dp[i][m] = sum[i]
            } else {
                for (var x = 1; x <= 2 * m; x++) {
                    dp[i][m] = Math.max(dp[i][m], sum[i] - dp[i + x][Math.max(m, x)])
                }
            }
        }
    }
    return dp[0][1]
};