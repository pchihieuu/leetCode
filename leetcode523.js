/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let sum = 0;
    const map = new Map();
    map.set(0, -1);
    for (let i = 0, n = nums.length; i < n; i++) {
        sum += nums[i];
        if (k !== 0) {
            sum %= k;
        }
        if (map.has(sum)) {
            if (i - map.get(sum) > 1) {
                return true;
            }
        } else {
            map.set(sum, i);
        }
    }
    return false;
};