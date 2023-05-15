/* 19. Remove Nth Node From End of List
 * author: Phan Chí Hiếu
 */
class ListNode {
    int val;
    ListNode next;
    // Default Constructor
    ListNode() {}
    //Constructor with 1 fields
    ListNode(int val) {
        this.val = val;
    }
    //Constructor with 3 fields
    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode fast = head, slow = head;
        for(int i = 0; i < n;i++) fast = fast.next;
        if(fast == null) return head.next;
        while(fast.next != null) {
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        return head;

    }
}
