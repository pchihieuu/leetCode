/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return '0'
    let res = ''
    if (numerator < 0 ^ denominator < 0) res += '-'
    let n = Math.abs(numerator)
    let d = Math.abs(denominator)
    res += Math.floor(n / d)
    let r = n % d
    if (r === 0) return res
    res += '.'
    let map = new Map()
    while (r !== 0) {
        if (map.has(r)) {
            res = res.substring(0, map.get(r)) + '(' + res.substring(map.get(r)) + ')'
            break
        }
        map.set(r, res.length)
        r *= 10
        res += Math.floor(r / d)
        r %= d
    }
    return res
};