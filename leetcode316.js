/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let stack = [];
    let last = {};
    let visited = {};
    for (let i = 0; i < s.length; i++) {
        last[s[i]] = i;
    }
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (visited[c]) {
            continue;
        }
        while (stack.length && stack[stack.length - 1] > c && last[stack[stack.length - 1]] > i) {
            visited[stack.pop()] = false;
        }
        stack.push(c);
        visited[c] = true;
    }
    return stack.join('');
};