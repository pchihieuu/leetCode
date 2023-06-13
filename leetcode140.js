/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict){
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    if (!dp[s.length]) return [];
    let res = [];
    let dfs = (i, path) => {
        if (i === s.length) {
            res.push(path);
            return;
        }
        for (let j = i + 1; j <= s.length; j++) {
            if (dp[j] && wordDict.includes(s.substring(i, j))) {
                dfs(j, path + ' ' + s.substring(i, j));
            }
        }
    }
    dfs(0, '');
    return res.map(x => x.substring(1));
};