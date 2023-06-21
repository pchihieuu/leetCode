/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    for (let str of strs) {
        let [zero, one] = count(str)
        for (let i = m; i >= zero; i--) {
            for (let j = n; j >= one; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zero][j - one] + 1)
            }
        }
    }
    return dp[m][n]
};

function count(str) {
    let zero = one = 0
    for (let c of str) {
        if (c === '0') {
            zero++
        } else {
            one++
        }
    }
    return [zero, one]
};