/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    nums.sort((a, b) => a - b);
    let dp = Array(nums.length).fill(1);
    let max = 1;
    let maxIndex = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        if (dp[i] > max) {
            max = dp[i];
            maxIndex = i;
        }
    }
    let res = [];
    let temp = nums[maxIndex];
    let count = max;
    for(let i = maxIndex; i >= 0; i--) {
        if (temp % nums[i] === 0 && dp[i] === count) {
            res.push(nums[i]);
            temp = nums[i];
            count--;
        }
    }
    return res;    
};