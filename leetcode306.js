/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    if (num.length < 3) {
        return false
    }
    for (let i = 1; i <= num.length / 2; i++) {
        for (let j = 1; j <= (num.length - i) / 2; j++) {
            if (isAdditiveNumberHelper(num, i, j)) {
                return true
            }
        }
    }
    return false
};

function isAdditiveNumberHelper(num, i, j) {
    if (num[0] === '0' && i > 1) {
        return false
    }
    if (num[i] === '0' && j > 1) {
        return false
    }
    let a = num.slice(0, i)
    let b = num.slice(i, i + j)
    let sum = add(a, b)
    let index = i + j
    while (index < num.length) {
        if (num[index] !== sum[0]) {
            return false
        }
        if (sum.length > 1 && num.slice(index, index + sum.length) !== sum) {
            return false
        }
        index += sum.length
        a = b
        b = sum
        sum = add(a, b)
    }
    return true
};

function add(a, b) {
    let carry = 0
    let result = ''
    let i = a.length - 1
    let j = b.length - 1
    while (i >= 0 || j >= 0) {
        let sum = carry
        if (i >= 0) {
            sum += parseInt(a[i])
            i--
        }
        if (j >= 0) {
            sum += parseInt(b[j])
            j--
        }
        result = sum % 10 + result
        carry = Math.floor(sum / 10)
    }
    if (carry > 0) {
        result = carry + result
    } 
    return result 
};