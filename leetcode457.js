/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    let n = nums.length;
    if(n <= 1) return false;
    let i = 0;
    let j = 0;
    for(let i = 0; i< n; i++) {
        let slow, fast;
        slow = fast = i;
        let isForward = nums[i] > 0 ? true : false
        while(true) {
            slow = getNextPosition(nums, slow, isForward)
            if(slow === -1) break;

            fast = getNextPosition(nums, fast, isForward)
            if(fast === -1) break;
            
            fast = getNextPosition(nums, fast, isForward)
            if(fast === -1) break;
            
            if(slow === fast) return true;
        }
    }
    return false;
};

function getNextPosition(nums, i, isForward) {
    let n = nums.length;
    let next = (i + nums[i]) % n;
    if(next < 0) next += n;
    if(i === next || nums[i] * nums[next] < 0) return -1;
    return next;
};