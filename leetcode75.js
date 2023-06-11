/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    let k = 0;
    while (k <= j) {
        if (nums[k] === 0) {
            [nums[i], nums[k]] = [nums[k], nums[i]];
            i++;
            k++;
        } else if (nums[k] === 2) {
            [nums[j], nums[k]] = [nums[k], nums[j]];
            j--;
        } else {
            k++;
        }
    }
};