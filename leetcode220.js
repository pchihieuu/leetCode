/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
let containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (k < 1 || t < 0) {
        return false;
    }
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const bucket = Math.floor(num / (t + 1));
        if (map.has(bucket) || (map.has(bucket - 1) && num - map.get(bucket - 1) <= t) || (map.has(bucket + 1) && map.get(bucket + 1) - num <= t)) {
            return true;
        }
        if (map.size >= k) {
            map.delete(Math.floor(nums[i - k] / (t + 1)));
        }
        map.set(bucket, num);
    }
    return false;
};