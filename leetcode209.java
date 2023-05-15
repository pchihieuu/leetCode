public class leetcode109 {
    //209. Minimum Size Subarray Sum
    //author: Phan Chi Hieu
    
        public int minSubArrayLen(int target, int[] nums) {
            int ans = Integer.MAX_VALUE;
        int sum = 0;
    
        for (int l = 0, r = 0; r < nums.length; ++r) {
          sum += nums[r];
          while (sum >= target) {
            ans = Math.min(ans, r - l + 1);
            sum -= nums[l++];
          }
        }
    
        return ans != Integer.MAX_VALUE ? ans : 0;
        }
    
}
