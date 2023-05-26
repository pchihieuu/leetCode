public class leetcode338 {
    public int[] countBits(int n) {
        // Let f(i) := i's # of 1's in bitmask
        // f(i) = f(i / 2) + i % 2
        int[] ans = new int[n + 1];

        for (int i = 1; i <= n; ++i)
            ans[i] = ans[i / 2] + (i % 2 == 0 ? 0 : 1);

        return ans;
    }
}
