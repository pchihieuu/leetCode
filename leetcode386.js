/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let res = [];
    for(let i = 1; i <= 9; i++){
        dfs(i, n, res);
    }
    return res;
};

function dfs(i, n, res){
    if(i > n) {
        return;
    }
    res.push(i);
    for(let j = 0; j <= 9; j++){
        dfs(i * 10 + j, n, res);
    }
};