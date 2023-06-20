/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    let stack = []
    let arr = preorder.split(',')
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i])
        while (stack.length >= 3 && stack[stack.length - 1] === '#' && stack[stack.length - 2] === '#' && stack[stack.length - 3] !== '#') {
            stack.pop()
            stack.pop()
            stack.pop()
            stack.push('#')
        }
    }
    return stack.length === 1 && stack[0] === '#' ? true : false
};