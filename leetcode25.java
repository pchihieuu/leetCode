public class leetcode25 {
    /**
     * @param head
     * @param k
     * @return
     */
    public int reverseKGroup(ListNode head, int k) {
        int[] nums;
        dp = new Integer[nums.length][1 << (kPrimesCount + 1)];
    int[] masks = new int[nums.length];

    for (int i = 0; i < nums.length; ++i)
      masks[i] = getMask(nums[i]);

    // -1 means that we take no number.
    // `usedMask` is initialized to 1 so that -1 & 1 = 1 instead of 0.
    return squareFreeSubsets(masks, 0, /*usedMask=*/1) - 1;
  }

  private static final int kMod = 1_000_000_007;
  private static final int kPrimesCount = 10;
  private final int[] primes = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29};
  private Integer[][] dp;

  private int squareFreeSubsets(int[] masks, int i, int usedMask) {
    if (i == masks.length)
      return 1;
    if (dp[i][usedMask] != null)
      return dp[i][usedMask];
    final int pick =
        (masks[i] & usedMask) == 0 ? squareFreeSubsets(masks, i + 1, usedMask | masks[i]) : 0;
    final int skip = squareFreeSubsets(masks, i + 1, usedMask);
    return dp[i][usedMask] = (pick + skip) % kMod;
  }

  // E.g. num = 10 = 2 * 5, so mask = (101)2 -> (1010)2 (append a 0)
  //      num = 15 = 3 * 5, so mask = (110)2 -> (1100)2 (append a 0)
  //      num = 25 = 5 * 5, so mask =  (-1)2 -> (1..1)2 (invalid)
  private int getMask(int num) {
    int mask = 0;
    for (int i = 0; i < primes.length; ++i) {
      int rootCount = 0;
      while (num % primes[i] == 0) {
        num /= primes[i];
        ++rootCount;
      }
      if (rootCount >= 2)
        return -1;
      if (rootCount == 1)
        mask |= 1 << i;
    }
    return mask << 1;
    }
}
