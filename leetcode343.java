class leetcode343 {
    public int integerBreak(int n) {
        if (n == 2)
            return 1; // 1 * 1
        if (n == 3)
            return 2; // 1 * 2

        int ans = 1;

        while (n > 4) {
            n -= 3;
            ans *= 3;
        }
        ans *= n;

        return ans;
    }
}
