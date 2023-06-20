/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    let dir = input.split('\n');
    let stack = [];
    let max = 0;
    for(let i = 0; i < dir.length; i++) {
        let level = dir[i].lastIndexOf('\t') + 1;
        let name = dir[i].substring(level);
        while(stack.length > level) {
            stack.pop();
        }
        stack.push(name);
        if(name.indexOf('.') !== -1) {
            max = Math.max(max, stack.join('/').length);
        }
    }
    return max; 
};