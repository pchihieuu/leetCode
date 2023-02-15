class Solution {
    /// 746. Min Cost Climbing Stairs
    // author: Phan Chí Hiếu
    // github: https://github.com/Phanhieu1221
    /*https://leetcode.com/problems/min-cost-climbing-stairs/ */
    public int minCostClimbingStairs(int[] cost) {
        final int n = cost.length;
        for(int i = 2; i < n; ++i)
            cost[i] += Math.min(cost[i -1], cost[i - 2]);
        return Math.min(cost[n - 1], cost[n - 2]);
    }
}