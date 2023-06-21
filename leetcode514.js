/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    let m = ring.length
    let n = key.length
    let dp = Array.from({length: m}, () => Array.from({length: n}, () => Infinity))
    let map = new Map()
    for(let i = 0; i < m; i++) {
        if(!map.has(ring[i])) {
            map.set(ring[i], [])
        }
        map.get(ring[i]).push(i)
    }
    let dfs = (i, j) => {
        if(j === n) {
            return 0
        }
        if(dp[i][j] !== Infinity) {
            return dp[i][j]
        }
        let min = Infinity
        for(let k of map.get(key[j])) {
            let step = Math.min(Math.abs(i - k), m - Math.abs(i - k)) + dfs(k, j + 1)
            min = Math.min(min, step)
        }
        dp[i][j] = min
        return min
    }
    return dfs(0, 0) + n
};