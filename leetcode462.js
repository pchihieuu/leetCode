/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b)
    let median = nums[Math.floor(nums.length / 2)]
    let count = 0
    for (let num of nums) {
        count += Math.abs(num - median)
    }
    return count
};