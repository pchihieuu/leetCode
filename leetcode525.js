/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let sum = 0, res = 0;
    const map = new Map();
    map.set(0, -1);
    for (let i = 0, n = nums.length; i < n; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        if (map.has(sum)) {
            res = Math.max(res, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }
    return res;
};