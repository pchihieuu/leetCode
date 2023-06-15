/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var a = headA;
    var b = headB;
    while(a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    return a;  
};