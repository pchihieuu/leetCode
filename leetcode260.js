/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let result = []
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
        map.delete(nums[i])
        } else {
        map.set(nums[i], 1)
        }
    }
    for (let [key, value] of map) {
        result.push(key)
    }
    return result
};