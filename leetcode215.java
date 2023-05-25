import java.util.PriorityQueue;
import java.util.Queue;
/*215. Kth Largest Element in an Array
 * author: Phan Chi Hieu
 */
public class leetcode215 {
    public int findKthLargest(int[] nums, int k) {
        Queue<Integer> minHeap = new PriorityQueue<>();

        for (final int num : nums) {
            minHeap.offer(num);
        while (minHeap.size() > k)
            minHeap.poll();
        }

        return minHeap.peek();
    }
}
