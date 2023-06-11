/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
    }
    let rowBegin = 0;
    let rowEnd = n - 1;
    let colBegin = 0;
    let colEnd = n - 1;
    let num = 1;
    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        for (let i = colBegin; i <= colEnd; i++) {
            result[rowBegin][i] = num;
            num++;
        }
        rowBegin++;
        for (let i = rowBegin; i <= rowEnd; i++) {
            result[i][colEnd] = num;
            num++;
        }
        colEnd--;
        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
                result[rowEnd][i] = num;
                num++;
            }
        }
        rowEnd--;
        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                result[i][colBegin] = num;
                num++;
            }
        }
        colBegin++;
    }
    return result;
};