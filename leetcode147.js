/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head){
    let dummy = new ListNode(0);
    let cur = head;
    while(cur){
        let pre = dummy;
        while(pre.next && pre.next.val < cur.val){
            pre = pre.next;
        }
        let next = cur.next;
        cur.next = pre.next;
        pre.next = cur;
        cur = next;
    }
    return dummy.next;
};