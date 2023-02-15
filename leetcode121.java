class Solution {
/// 121. Best Time to Buy and Sell Stock
// author: Phan Chí Hiếu
// github: https://github.com/Phanhieu1221
/*You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. */
    public int maxProfit(int[]prices) {
        if(prices.length == 0) {
            return 0;
        }
        int result = 0, min = prices[0];
        for(int i = 1; i < prices.length; i++) {
            if(prices[i] < min) {
                min = prices[i];
            } else {
                result = Math.max(result, prices[i] - min);

            }
        
        }
        return result;
    }
}
