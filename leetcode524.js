/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    dictionary.sort((a, b) => a.length === b.length ? a.localeCompare(b) : b.length - a.length);
    for (let i = 0, n = dictionary.length; i < n; i++) {
        if (isSubsequence(dictionary[i], s)) {
            return dictionary[i];
        }
    }
    return ``;
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