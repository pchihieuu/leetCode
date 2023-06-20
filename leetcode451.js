/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map()
    for (let c of s) {
      map.set(c, (map.get(c) || 0) + 1)
    }
    let arr = Array.from(map)
    arr.sort((a, b) => b[1] - a[1])
    let res = ''
    for (let [k, v] of arr) {
      res += k.repeat(v)
    }
    return res
};
