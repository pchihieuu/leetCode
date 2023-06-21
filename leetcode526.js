/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    let result = 0
    let visited = new Array(n + 1).fill(false)
    let dfs = (index) => {
        if (index > n) {
            result++
            return
        }
        for (let i = 1; i <= n; i++) {
            if (!visited[i] && (i % index === 0 || index % i === 0)) {
                visited[i] = true
                dfs(index + 1)
                visited[i] = false
            }
        }
    }
    dfs(1)
    return result
};