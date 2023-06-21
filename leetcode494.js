/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let count = 0;
    let dfs = (nums, target, index) => {
        if (index === nums.length) {
            if (target === 0) {
                count++;
            }
            return;
        }
        dfs(nums, target - nums[index], index + 1);
        dfs(nums, target + nums[index], index + 1);
    }
    dfs(nums, target, 0);
    return count;  
};