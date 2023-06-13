var partition = function(s) {
    let res = [];
    let path = [];
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
    function dfs(i) {
        if (i == n) {
            res.push(path.slice());
            return;
        }
        for (let j = i; j < n; j++) {
            if (dp[i][j]) {
                path.push(s.slice(i, j + 1));
                dfs(j + 1);
                path.pop();
            }
        }
    }
    dfs(0);
    return res;
};