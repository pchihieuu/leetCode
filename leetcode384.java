import java.util.Random;

class leetcode384 {
    public void Solution(int[] nums) {
        this.nums = nums;
    }
    
    public int[] reset() {
        return nums;
    }
    
    public int[] shuffle() {
        int[] A = nums.clone();
        for (int i = A.length - 1; i > 0; --i) {
            final int j = rand.nextInt(i + 1);
            swap(A, i, j);
        }
        return A;
    }
    private int[] nums;
    private Random rand = new Random();

    private void swap(int[] A, int i, int j) {
        final int temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    }
}
