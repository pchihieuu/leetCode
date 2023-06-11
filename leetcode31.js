var nextPermutation = function(nums) {
    var indexToReplace=-1;
    var indexToSwap;
    
    for(var i=nums.length-2;i>=0;i--){
    
        if(nums[i]<nums[i+1]){
            indexToReplace=i;
            break;
        }
        
    }
    
    if(indexToReplace==-1)
        return nums.reverse();
    
    if(indexToReplace!=-1){
        i=nums.length-1;
        while(i>indexToReplace){
            if(nums[i]>nums[indexToReplace]){
                indexToSwap=i;
                break;
            }
            i--;    
        }
        [nums[indexToReplace],nums[indexToSwap]]=[nums[indexToSwap],nums[indexToReplace]];
        var subArrayToReverse=nums.splice(indexToReplace+1);
        nums.push(...subArrayToReverse.reverse());
        return nums;
    }
};