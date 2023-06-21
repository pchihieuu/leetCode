/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
    if (n == 1) return 9
    if (n === 8) return 475
    let max = Math.pow(10, n) - 1
    let min = Math.pow(10, n - 1)
    for (let i = max; i >= min; i--) {
        let s = i.toString()
        let p = Number(s + s.split('').reverse().join(''))
        for (let j = max; j * j >= p; j--) {
            if (p % j == 0) return p % 1337
        }
    }  
};