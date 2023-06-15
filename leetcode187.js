/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let map = new Map()
    let res = []
    for (let i = 0; i < s.length - 9; i++) {
        let sub = s.substr(i, 10)
        if (map.has(sub)) {
        if (map.get(sub) === 1) {
            res.push(sub)
        }
        map.set(sub, map.get(sub) + 1)
        } else {
        map.set(sub, 1)
        }
    }
    return res  
};