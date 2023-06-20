/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let n = nums.length;
    let dp = new Array(n).fill(0);
    let sorted = [];
    for (let i = n - 1; i >= 0; i--) {
        let left = 0;
        let right = sorted.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (sorted[mid] < nums[i]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        dp[i] = left;
        sorted.splice(left, 0, nums[i]);
    }
    return dp;
};