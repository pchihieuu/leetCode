/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    let res = ''
    let count = new Array(10).fill(0)
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'z') count[0]++
        if (s[i] === 'w') count[2]++
        if (s[i] === 'u') count[4]++
        if (s[i] === 'x') count[6]++
        if (s[i] === 'g') count[8]++
        if (s[i] === 'o') count[1]++
        if (s[i] === 'h') count[3]++
        if (s[i] === 'f') count[5]++
        if (s[i] === 's') count[7]++
        if (s[i] === 'i') count[9]++
    }
    count[1] -= count[0] + count[2] + count[4]
    count[3] -= count[8]
    count[5] -= count[4]
    count[7] -= count[6]
    count[9] -= count[5] + count[6] + count[8]
    for (let i = 0; i < 10; i++) {
        while (count[i] > 0) {
            res += i
            count[i]--
        }
    }
    return res
};