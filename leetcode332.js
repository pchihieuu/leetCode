/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let map = {}
    for (let i = 0; i < tickets.length; i++) {
        let [from, to] = tickets[i]
        if (map[from]) {
            map[from].push(to)
        } else {
            map[from] = [to]
        }
    }
    for (let key in map) {
        map[key].sort()
    }
    let result = []
    let dfs = (from) => {
        let arr = map[from]
        while (arr && arr.length) {
            dfs(arr.shift())
        }
        result.unshift(from)
    }
    dfs('JFK')
    return result
};