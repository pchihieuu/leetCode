public class leetcode24 {
    //Swap Nodes in Pairs
    //author: Phan Chi Hieu
    public ListNode swapPairs(ListNode head) {
        final int length = getLength(head);
        ListNode band =  new ListNode(0, head);
        ListNode prev = band;
        ListNode curr = head;

        for(int i = 0; i < length / 2; i++) {
            ListNode next = curr.next;
            curr.next = next.next;
            next.next = curr;
            prev.next = next;
            prev = curr;
            curr = curr.next;
        }
        return band.next;
    }
    private int getLength(ListNode head) {
        int length = 0;
        for(ListNode curr = head; curr != null; curr = curr.next)
            length++;
        return length;
    }
    
}
