/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let max = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i].length * words[j].length <= max) 
                continue;
            if (isCommon(words[i], words[j])) 
                continue;
            max = words[i].length * words[j].length;
        }
    }
    return max;
};

function isCommon(a, b) {
    let map = {};
    for (let i = 0; i < a.length; i++) {
        map[a[i]] = true;
    }
    for (let i = 0; i < b.length; i++) {
        if (map[b[i]])
            return true;
    }
    return false;
};