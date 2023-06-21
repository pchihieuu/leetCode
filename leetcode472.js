/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    let res = []
    let set = new Set(words)
    for (let word of words) {
        set.delete(word)
        if (wordBreak(word, set)) {
            res.push(word)
        }
        set.add(word)
    }
    return res
};

function wordBreak(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.has(s.substring(j, i))) {
                dp[i] = true
                break
            }
        }
    }
    return dp[s.length]
}