/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let index = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === s[index]) {
            index++
        }
    }
    if (index === s.length) {
        return s
    }
    let suffix = s.substring(index)
    return suffix.split('').reverse().join('') + shortestPalindrome(s.substring(0, index)) + suffix
};