/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    let res = []
    let queue = [root]
    while(queue.length) {
        let len = queue.length
        let max = -Infinity
        for(let i = 0; i < len; i++) {
            let node = queue.shift()
            if(node) {
                max = Math.max(max, node.val)
                queue.push(node.left)
                queue.push(node.right)
            }
        }
        if(max !== -Infinity) {
            res.push(max)
        }
    }
    return res
};