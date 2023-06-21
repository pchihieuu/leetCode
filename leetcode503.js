/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [];
    let result = new Array(nums.length).fill(-1);
    for (let i = 0; i < nums.length * 2; i++) {
        let num = nums[i % nums.length];
        while (stack.length && nums[stack[stack.length - 1]] < num) {
            result[stack.pop()] = num;
        }
        if (i < nums.length) stack.push(i);
    }
    return result;
};