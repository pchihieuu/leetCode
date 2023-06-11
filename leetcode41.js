/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;
    let i = 0;
    while(i < n){
        if(nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]){
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }else{
            i++;
        }
    }
    for(let i = 0; i < n; i++){
        if(nums[i] !== i + 1){
            return i + 1;
        }
    }
    return n + 1;  
};