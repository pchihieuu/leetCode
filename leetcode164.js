/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length < 2) return 0
    let min = nums[0]
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        min = Math.min(min, nums[i])
        max = Math.max(max, nums[i])
    }
    let gap = Math.ceil((max - min) / (nums.length - 1))
    let bucketMin = new Array(nums.length - 1).fill(Number.MAX_SAFE_INTEGER)
    let bucketMax = new Array(nums.length - 1).fill(Number.MIN_SAFE_INTEGER)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === min || nums[i] === max) continue
        let idx = Math.floor((nums[i] - min) / gap)
        bucketMin[idx] = Math.min(bucketMin[idx], nums[i])
        bucketMax[idx] = Math.max(bucketMax[idx], nums[i])
    }
    let maxGap = Number.MIN_SAFE_INTEGER
    let previous = min
    for (let i = 0; i < nums.length - 1; i++) {
        if (bucketMin[i] === Number.MAX_SAFE_INTEGER && bucketMax[i] === Number.MIN_SAFE_INTEGER) continue
        maxGap = Math.max(maxGap, bucketMin[i] - previous)
        previous = bucketMax[i]
    }
    maxGap = Math.max(maxGap, max - previous)
    return maxGap
};