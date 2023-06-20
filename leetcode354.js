/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    envelopes.sort((a,b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
    let len = envelopes.length
    let dp = []
    for (let i = 0; i < len; i++) {
        let height = envelopes[i][1]
        let left = 0
        let right = dp.length   
        while (left < right) {
            let mid = (left + right) >> 1
            if (dp[mid] < height) left = mid + 1
            else right = mid
        }
        dp[left] = height
    }
    return dp.length
};