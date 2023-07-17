/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let stack1 = []
    let stack2 = []
    while (l1) {
        stack1.push(l1.val)
        l1 = l1.next
    }
    while (l2) {
        stack2.push(l2.val)
        l2 = l2.next
    }
    let carry = 0
    let head = null
    while (stack1.length || stack2.length || carry) {
        let sum = carry
        if (stack1.length) {
            sum += stack1.pop()
        }
        if (stack2.length) {
            sum += stack2.pop()
        }
        let node = new ListNode(sum % 10)
        node.next = head
        head = node
        carry = Math.floor(sum / 10)
    }
    return head
};
