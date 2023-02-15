import java.util.Comparator;
import java.util.PriorityQueue;

class Solution {
    ///1046. Last Stone Weight
    // author: Phan Chí Hiếu
    // github: https://github.com/Phanhieu1221
    /*https://leetcode.com/problems/last-stone-weight/ */
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> heap = new PriorityQueue<>(Comparator.reverseOrder());
        for(int stone : stones) {
            heap.add(stone);
        }
        while(heap.size() > 1) {
            int stone1 = heap.remove();
            int stone2 = heap.remove();

            if(stone1 - stone2 != 0) {
                heap.add(stone1 - stone2);
            }
        }
        return heap.isEmpty()? 0 :heap.remove();
    }
   
}
