/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    let max = 0
    let mask = 0
    for (let i = 31; i >= 0; i--) {
        mask = mask | (1 << i)
        let set = new Set()
        for (let j = 0; j < nums.length; j++) {
            set.add(nums[j] & mask)
        }
        let tmp = max | (1 << i)
        for (let prefix of set) {
            if (set.has(tmp ^ prefix)) {
                max = tmp
                break
            }
        }
    }
    return max
};