/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    if(divisor===dividend) return 1;
    if (divisor <0 && dividend <0){
        return Math.ceil(dividend/divisor)-1
    }
    else if(dividend<0 || divisor<0){
        return Math.ceil(dividend/divisor)
    }
    else{
        return Math.floor(dividend/divisor)
    }
};