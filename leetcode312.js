/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let n = nums.length;
    let dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));
    let val = new Array(n + 2).fill(1);
    for (let i = 1; i <= n; i++) {
        val[i] = nums[i - 1];
    }
    for (let len = 1; len <= n; len++) {
        for (let left = 1; left <= n - len + 1; left++) {
            let right = left + len - 1;
            for (let i = left; i <= right; i++) {
                dp[left][right] = Math.max(dp[left][right], dp[left][i - 1] + dp[i + 1][right] + val[left - 1] * val[i] * val[right + 1]);
            }
        }
    }
    return dp[1][n];
};