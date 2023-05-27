import java.util.Arrays;

class leetcode416 {
    public boolean canPartition(int[] nums) {
        final int sum = Arrays.stream(nums).sum();
        if(sum % 2 == 1)
            return false;
        return dePartMent(nums, sum / 2);
    }
    private boolean dePartMent(int[]nums, int subSum) {
        boolean[] temp = new boolean[subSum + 1];
        temp[0] = true;

        for(final int num : nums)
            for(int i = subSum; i >= num; --i)
                temp[i] = temp[i] || temp[i - num];
        return temp[subSum];

    }
}
