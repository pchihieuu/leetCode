/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) {
        return [0];
    }
    const adj = new Array(n).fill(0).map(() => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    const leaves = [];
    for (let i = 0; i < n; i++) {
        if (adj[i].length === 1) {
            leaves.push(i);
        }
    }
    let remaining = n;
    while (remaining > 2) {
        remaining -= leaves.length;
        const newLeaves = [];
        for (const leaf of leaves) {
            const neighbor = adj[leaf].pop();
            adj[neighbor].splice(adj[neighbor].indexOf(leaf), 1);
            if (adj[neighbor].length === 1) {
                newLeaves.push(neighbor);
            }
        }
        leaves.splice(0, leaves.length, ...newLeaves);
    }
    return leaves;
};