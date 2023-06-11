/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [];
    let board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
    let cols = new Set();
    let diag1 = new Set();
    let diag2 = new Set();
    let dfs = (row) => {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            let id1 = row - col;
            let id2 = row + col;
            if (cols.has(col) || diag1.has(id1) || diag2.has(id2)) {
                continue;
            }
            board[row][col] = 'Q';
            cols.add(col);
            diag1.add(id1);
            diag2.add(id2);
            dfs(row + 1);
            board[row][col] = '.';
            cols.delete(col);
            diag1.delete(id1);
            diag2.delete(id2);
        }
    }
    dfs(0);
    return result;
};