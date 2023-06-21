/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
    let res = -1;
    for (let i = 0, n = strs.length; i < n; i++) {
        let j = 0;
        for (; j < n; j++) {
            if (i !== j && isSubsequence(strs[i], strs[j])) {
                break;
            }
        }
        if (j === n) {
            res = Math.max(res, strs[i].length);
        }
    }
    return res;
};

function isSubsequence(s, t) {
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
};