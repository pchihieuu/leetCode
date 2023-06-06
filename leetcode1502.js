/*
 * @lc app=leetcode id=1502 lang=javascript
 *
 * [1502] Can Make Arithmetic Progression From Sequence
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => a - b)
    for(let i = 0; i < arr.length-2; i++){
        if(arr[i]-arr[i+1] != arr[i+1]-arr[i+2]){
            return false
        }
    }
    return true
};
// @lc code=end