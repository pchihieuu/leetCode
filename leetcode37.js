/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var dfs = function(board, row, col, box, i, j) {
    if (i === 9) {
        return true;
    }
    if (j === 9) {
        return dfs(board, row, col, box, i + 1, 0);
    }
    if (board[i][j] !== '.') {
        return dfs(board, row, col, box, i, j + 1);
    }
    for (let k = 1; k <= 9; k++) {
        let num = 1 << k;
        let b = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (row[i] & num || col[j] & num || box[b] & num) {
            continue;
        }
        row[i] |= num;
        col[j] |= num;
        box[b] |= num;
        board[i][j] = k.toString();
        if (dfs(board, row, col, box, i, j + 1)) {
            return true;
        }
        row[i] ^= num;
        col[j] ^= num;
        box[b] ^= num;
        board[i][j] = '.';
    }
    return false;
};

var solveSudoku = function(board) {
    let row = new Array(9).fill(0);
    let col = new Array(9).fill(0);
    let box = new Array(9).fill(0);
    
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(board[i][j] !== '.'){
                let num = board[i][j];
                let k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                
                row[i] |= (1 << num);
                col[j] |= (1 << num);
                box[k] |= (1 << num);
            }
        }
    }
    
    dfs(board, row, col, box, 0, 0);
};