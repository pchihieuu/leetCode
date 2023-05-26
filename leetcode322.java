import java.util.Arrays;

class leetcode322  {
    public int coinChange(int[] coins, int amount) {
        int[] result = new int[amount + 1];
        Arrays.fill(result, 1, result.length, amount + 1);

        for(int i = 1; i <= amount; ++i) 
            for(final int coin : coins) 
                if(coin <= i) 
                    result[i] = Math.min(result[i], result[i - coin] + 1);
        return result[amount] == amount + 1 ? -1 : result[amount];
    }
}
