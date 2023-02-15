import java.util.Arrays;
/// 1706. Where Will the Ball Fall
// author: Phan Chí Hiếu
// github: https://github.com/Phanhieu1221
/*https://leetcode.com/problems/where-will-the-ball-fall */
class Solution {
    public int[] findBall(int[][] grid) {
        final int m = grid.length;
        final int n = grid[0].length;

        int[] dp = new int[n];
        int[] ans = new int[n];
        Arrays.fill(ans, -1);

        for(int i = 0;i < n; ++i)
            dp[i] = i;
        for(int i = 0;i < m; ++i) {
            int[] newDeep = new int[n];
            Arrays.fill(newDeep, -1);
            for(int j = 0; j < n; ++j) {
                if(j + grid[i][j] < 0 || j + grid[i][j] == n) 
                    continue;
                if(grid[i][j] == 1 && grid[i][j + 1] == -1 || grid[i][j] == -1 && grid[i][j - 1] == 1)
                    continue;
                newDeep[j +  grid[i][j]] = dp[j];
            }
            dp = newDeep;
        }
        for(int i = 0;i < n ; ++i) 
            if(dp[i] != -1)
                ans[dp[i]] = i;
            
        return ans;
    }
  
}
