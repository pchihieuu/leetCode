/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    if (b.length === 0) {
        return 1;
    }
    let last = b.pop();
    let part1 = myPow(a, last);
    let part2 = myPow(superPow(a, b), 10);
    return (part1 * part2) % 1337;
};

function myPow(a, k) {
    a %= 1337;
    let res = 1;
    for(let i = 0; i < k; i++) {
        res = (res * a) % 1337;
    }
    return res;
};