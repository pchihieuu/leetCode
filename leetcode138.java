import java.util.HashMap;
import java.util.Map;

public class leetcode138 {
    public Node copyRandomList(Node head) {
      if (head == null)
        return null;
      if (map.containsKey(head))
        return map.get(head);

        Node newNode = new Node(head.val);
        map.put(head, newNode);
        newNode.next = copyRandomList(head.next);
        newNode.random = copyRandomList(head.random);
        return newNode;
  }
  private Map<Node, Node> map = new HashMap<>();
}
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
