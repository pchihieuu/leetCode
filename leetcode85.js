/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let m = matrix.length;
    if (m === 0) {
        return 0;
    }
    let n = matrix[0].length;
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(n);
    let height = new Array(n).fill(0);
    let maxArea = 0;
    for (let i = 0; i < m; i++) {
        let curLeft = 0;
        let curRight = n;
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                height[j]++;
            } else {
                height[j] = 0;
            }
        }
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                left[j] = Math.max(left[j], curLeft);
            } else {
                left[j] = 0;
                curLeft = j + 1;
            }
        }
        for (let j = n - 1; j >= 0; j--) {
            if (matrix[i][j] === '1') {
                right[j] = Math.min(right[j], curRight);
            } else {
                right[j] = n;
                curRight = j;
            }
        }
        for (let j = 0; j < n; j++) {
            maxArea = Math.max(maxArea, (right[j] - left[j]) * height[j]);
        }
    }
    return maxArea;
};