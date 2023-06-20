/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    return helper(n, 0);
};

function helper(n, count) {
    if(n === 1) {
        return count;
    }
    if(n % 2 === 0) {
        return helper(n / 2, count + 1);
    } else {
        return Math.min(helper(n + 1, count + 1), helper(n - 1, count + 1));
    }
};