class Solution {
    ///70. Climbing Stairs
    // author: Phan Chí Hiếu
    // github: https://github.com/Phanhieu1221
    /*https://leetcode.com/problems/climbing-stairs/ */
    public int climbStairs(int n) {
        int [] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = 1;
        for(int i =2; i <= n; ++i) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
    
}
