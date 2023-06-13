/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head){
    if (!head) return;
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null;
    let curr = slow.next;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    slow.next = null;
    let first = head;
    let second = prev;
    while (second) {
        let next = first.next;
        first.next = second;
        first = next;
        next = second.next;
        second.next = first;
        second = next;
    }
};