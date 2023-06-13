/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s){
    let n = s.length;
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(false);
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
            }
        }
    }
    let f = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    for (let i = 0; i < n; i++) {
        if (dp[0][i]) {
            f[i] = 0;
        } else {
            for (let j = 0; j < i; j++) {
                if (dp[j + 1][i]) {
                    f[i] = Math.min(f[i], f[j] + 1);
                }
            }
        }
    }
    return f[n - 1];
};