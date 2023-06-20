var countRangeSum = function(nums, lower, upper) {
    if ( nums.length == 0 ) return 0;
    let sum = 0, sums = [],  res = 0;
    for ( let index in nums ) {
        sum += nums[index];
        if ( sum >= lower && sum <= upper ) {
            res++;
        };
        sums[index] = sum;
    };
    
    var mergeSort = function (arr) {
        if ( arr.length === 1 ) {
            return arr;
        };
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        
        return merge(
            mergeSort(left),
            mergeSort(right)
        );
    };
    
    var merge = function (left, right) {
        let result = [];
        let j = 0, k = 0, l = 0, m = 0;
        for ( let i = 0; i < left.length; i++ ) {
            while (j < right.length && right[j] - left[i] < lower){
                j++;
            };
            while (k < right.length && right[k] - left[i] <= upper){
                k++;
            };
            
            while( l < left.length && m < right.length ) {
                if ( left[l] <= right[m] ) {
                    result.push(left[l]);
                    l++;
                } else {
                    result.push(right[m]);
                    m++;
                };
            };
            
            while ( l < left.length ) {
                result.push(left[l]);
                l++;
            };
            
            while ( m < right.length ) {
                result.push(right[m]);
                m++;
            };
        
            res += k - j;
        };
        return result;
    }; 

    mergeSort(sums);
    
    return res;
};