/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let queue = [root]
    let res = root.val
    while(queue.length) {
        let len = queue.length
        for(let i = 0; i < len; i++) {
            let node = queue.shift()
            if(i === 0) {
                res = node.val
            }
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
    }
    return res
};