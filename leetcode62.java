import java.util.Arrays;
/// 62. Unique Paths
// author: Phan Chí Hiếu
// github: https://github.com/Phanhieu1221
/*https://leetcode.com/problems/unique-paths*/
class Solution {
    public int uniquePaths(int m, int n) {
        int[] dp = new int[n];
        Arrays.fill(dp, 1);

        for(int i = 1; i < m; ++i)
            for(int j = 1; j < n; ++j)
                dp[j] += dp[j - 1];
        return dp[n -1];
    }
}
