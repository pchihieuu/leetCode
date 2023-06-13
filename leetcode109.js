var sortedListToBST = function(head) {
    if (!head) return null;
    let mid = findMid(head);
    let root = new TreeNode(mid.val);
    if (head == mid) return root;
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(mid.next);
    return root;
};

var findMid = function(head) {
    let prev = null;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if (prev) prev.next = null;
    return slow;
};