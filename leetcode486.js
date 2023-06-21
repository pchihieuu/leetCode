/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    let n = nums.length
    let dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(0)
        dp[i][i] = nums[i]
    }
    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1])
        }
    }
    return dp[0][n - 1] >= 0
};