/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let num = 0;
    let str = '';
    for(let i = 0; i < s.length; i++) {
        let c = s[i];
        if(!isNaN(c)) {
            num = num * 10 + parseInt(c);
        } else if(c === '[') {
            stack.push(str);
            stack.push(num);
            num = 0;
            str = '';
        } else if(c === ']') {
            let times = stack.pop();
            let prev = stack.pop();
            str = prev + str.repeat(times);
        } else {
            str += c;
        }
    }
    return str;
};