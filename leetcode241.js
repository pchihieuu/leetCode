/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    let result = [];
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '+' || expression[i] === '-' || expression[i] === '*') {
            let left = diffWaysToCompute(expression.substring(0, i));
            let right = diffWaysToCompute(expression.substring(i + 1));
            for (let j = 0; j < left.length; j++) {
                for (let k = 0; k < right.length; k++) {
                    if (expression[i] === '+') {
                        result.push(left[j] + right[k]);
                    } else if (expression[i] === '-') {
                        result.push(left[j] - right[k]);
                    } else {
                        result.push(left[j] * right[k]);
                    }
                }
            }
        }
    }
    if (result.length === 0) {
        result.push(parseInt(expression));
    }
    return result;
};