/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let total = 0
    for (let i = 0; i < 32; i++) {
        let count = 0
        for (let num of nums) {
            count += (num >> i) & 1
        }
        total += count * (nums.length - count)
    }
    return total
};