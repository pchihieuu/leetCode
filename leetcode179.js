/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a, b) => {
        let s1 = a + '' + b
        let s2 = b + '' + a
        return s2 - s1
    })
    let res = nums.join('')
    return res[0] === '0' ? '0' : res
};