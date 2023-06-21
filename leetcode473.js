/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    if (matchsticks.length < 4) {
        return false
    }
    let sum = matchsticks.reduce((a, b) => a + b)
    if (sum % 4 !== 0) {
        return false
    }
    let target = sum / 4
    let visited = new Array(matchsticks.length).fill(false)
    return dfs(matchsticks, visited, 0, 0, 0, target)
};

function dfs(matchsticks, visited, start, side, k, target) {
    if (k === 3) {
        return true
    }
    if (side === target) {
        return dfs(matchsticks, visited, 0, 0, k + 1, target)
    }
    for (let i = start; i < matchsticks.length; i++) {
        if (!visited[i] && side + matchsticks[i] <= target) {
            visited[i] = true
            if (dfs(matchsticks, visited, i + 1, side + matchsticks[i], k, target)) {
                return true
            }
            visited[i] = false
        }
    }
    return false
};