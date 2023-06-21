/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
    if (desiredTotal <= maxChoosableInteger) {
        return true
    }
    if (desiredTotal > (1 + maxChoosableInteger) * maxChoosableInteger / 2) {
        return false
    }
    let map = new Map()
    return helper(maxChoosableInteger, desiredTotal, 0, map)
};

function helper(maxChoosableInteger, desiredTotal, used, map) {
    if (map.has(used)) {
        return map.get(used)
    }
    for (let i = 1; i <= maxChoosableInteger; i++) {
        let mask = 1 << i
        if ((used & mask) === 0) {
            if (i >= desiredTotal || !helper(maxChoosableInteger, desiredTotal - i, used | mask, map)) {
                map.set(used, true)
                return true
            }
        }
    }
    map.set(used, false)
    return false
};