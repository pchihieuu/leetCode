

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (!head) return null
    let stack = [head]
    let prev = null
    while (stack.length) {
        let node = stack.pop()
        if (prev) {
            prev.next = node
            node.prev = prev
        }
        if (node.next) stack.push(node.next)
        if (node.child) {
            stack.push(node.child)
            node.child = null
        }
        prev = node
    }
    return head
};