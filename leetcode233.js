/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    if(n <= 0) return 0;
    let res = 0, str = '' + n, l = str.length;
    for(let i = 0; i < l; i++){
        if(str[i] !== '0') 
            res += countHelper(parseInt(str[i]), l - i - 1);
        if(str[i] === '1' && i < str.length-1) 
            res += parseInt(str.slice(i+1));
    }
    return res;
};

function countHelper(digit, n) { 
    if(n === 0) return 1;
    if(digit === 1)
        return Math.pow(10, n-1) + (countHelper(1, n-1) - 1) * 10 + 1;
    else
        return Math.pow(10, n) + (countHelper(1, n) - 1) * digit;
};