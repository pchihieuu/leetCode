/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    const result = []
    const dfs = (path, index, value, prev) => {
        if (index === num.length) {
            if (value === target) {
                result.push(path)
            }
            return
        }
        for (let i = index; i < num.length; i++) {
            if (i !== index && num[index] === '0') {
                break
            }
            const current = Number(num.slice(index, i + 1))
            if (index === 0) {
                dfs(path + current, i + 1, current, current)
            } else {
                dfs(path + '+' + current, i + 1, value + current, current)
                dfs(path + '-' + current, i + 1, value - current, -current)
                dfs(path + '*' + current, i + 1, value - prev + prev * current, prev * current)
            }
        }
    }
    dfs('', 0, 0, 0)
    return result
};