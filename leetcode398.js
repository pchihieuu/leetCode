/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(this.map.has(nums[i])){
            this.map.get(nums[i]).push(i);
        }else{
            this.map.set(nums[i], [i]);
        }
    }  
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let list = this.map.get(target);
    let index = Math.floor(Math.random() * list.length);
    return list[index];    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */