/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let ugly = [1]
    let i2 = 0
    let i3 = 0
    let i5 = 0
    while (ugly.length < n) {
        let next = Math.min(ugly[i2] * 2, ugly[i3] * 3, ugly[i5] * 5)
        if (next === ugly[i2] * 2) {
            i2++
        }
        if (next === ugly[i3] * 3) {
            i3++
        }
        if (next === ugly[i5] * 5) {
            i5++
        }
        ugly.push(next)
    }
    return ugly[n - 1]
};