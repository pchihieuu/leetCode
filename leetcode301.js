/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    if (s.length === 0) {
      return ['']
    }
    let left = 0
    let right = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left++
        } else if (s[i] === ')') {
            if (left > 0) {
            left--
            } else {
            right++
            }
        }
        }
    let result = []
    let set = new Set()
    dfs(s, 0, left, right, 0, '', result, set)
    return result
};

function dfs(s, index, left, right, pair, path, result, set) {
    if (index === s.length) {
        if (left === 0 && right === 0 && pair === 0) {
            if (!set.has(path)) {
                result.push(path)
                set.add(path)
            }
        }
        return
    }
    if (s[index] === '(') {
        if (left > 0) {
            dfs(s, index + 1, left - 1, right, pair, path, result, set)
        }
        dfs(s, index + 1, left, right, pair + 1, path + '(', result, set)
    } else if (s[index] === ')') {
        if (right > 0) {
            dfs(s, index + 1, left, right - 1, pair, path, result, set)
        }
        if (pair > 0) {
            dfs(s, index + 1, left, right, pair - 1, path + ')', result, set)
        }
    } else {
        dfs(s, index + 1, left, right, pair, path + s[index], result, set)
    }
}