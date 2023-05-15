 class ListNode {
         int val;
         ListNode next;
         ListNode() {}
         ListNode(int val) { this.val = val; }
         ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}
class Solution{
    ///82. Remove Duplicates from Sorted List II
    public ListNode deleteDuplicates(ListNode head) {
        if(head==null) return null;
        ListNode fdat = new ListNode(0);
        fdat.next = head;
        ListNode previous = fdat;
        ListNode cur = head;
        while(cur!= null) {
            while(cur.next != null && cur.val == cur.next.val) {
                cur = cur.next;

            }
            if(previous.next == cur) {
                previous = previous.next;
            } else {
                previous.next = cur.next;
            }
            cur = cur.next;
        }
        return fdat.next;
    }
}
