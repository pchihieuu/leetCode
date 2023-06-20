/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let len = 1;
    let count = 9;
    let start = 1;
    while(n > len * count){
        n -= len * count;
        len++;
        count *= 10;
        start *= 10;
    }
    start += Math.floor((n - 1) / len);
    let s = start.toString();
    return parseInt(s[(n - 1) % len]);
};