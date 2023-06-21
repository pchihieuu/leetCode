/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let m = mat.length;
    let n = mat[0].length;
    let res = [];
    let i = 0;
    let j = 0;
    let up = true;
    while (res.length < m * n) {
        res.push(mat[i][j]);
        if (up) {
            if (j === n - 1) {
                i++;
                up = false;
            } else if (i === 0) {
                j++;
                up = false;
            } else {
                i--;
                j++;
            }
        } else {
            if (i === m - 1) {
                j++;
                up = true;
            } else if (j === 0) {
                i++;
                up = true;
            } else {
                i++;
                j--;
            }
        }
    }
    return res;
};