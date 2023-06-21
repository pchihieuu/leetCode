/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
    let c = t = i = j = 0
    while (c < n1) {
        if (s1[i] === s2[j]) {
            j++
            if (j === s2.length) {
                j = 0
                t++
            }
        }
        i++
        if (i === s1.length) {
            i = 0
            c++
        }
    }
    return Math.floor(t / n2)
};