/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
    let max = -Infinity;
    let n = matrix[0].length;
    for(let i = 0; i < matrix.length; i++) {
        let row = Array(n).fill(0);
        for(let ii = i; ii < matrix.length; ii++) {
            const nrow = matrix[ii];
            for(let t = 0; t < row.length; t++) {
                row[t] += nrow[t];
            }

            for(let j = 0; j < row.length; j++) {
                let sum = 0;
                for(let jj = j; jj < row.length; jj++) {
                    sum += row[jj];
                    if (sum <= k) {
                        max = Math.max(sum, max);
                    }
                    if (max === k) {
                        return max;
                    }
                }    
            }
        }
    }
    return max;
};