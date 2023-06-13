var pathSum = function(root, targetSum) {
    let result = [];
    let path = [];
    let sum = 0;
    function dfs(root, targetSum) {
        if (root === null) {
            return;
        }
        path.push(root.val);
        sum += root.val;
        if (root.left === null && root.right === null && sum === targetSum) {
            result.push([...path]);
        }
        dfs(root.left, targetSum);
        dfs(root.right, targetSum);
        path.pop();
        sum -= root.val;
    }
    dfs(root, targetSum);
    return result;  
};