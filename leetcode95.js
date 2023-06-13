/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    const generate = (start, end) => {
        const result = [];
        if (start > end) {
            result.push(null);
            return result;
        }
        for (let i = start; i <= end; i++) {
            const left = generate(start, i - 1);
            const right = generate(i + 1, end);
            for (const l of left) {
                for (const r of right) {
                    const root = new TreeNode(i);
                    root.left = l;
                    root.right = r;
                    result.push(root);
                }
            }
        }
        return result;
    }
    return generate(1, n);
};