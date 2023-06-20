/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    let max = 0;
    for(let i = 1; i <= 26; i++){
        max = Math.max(max, helper(s, k, i));
    }
    return max;
};

function helper(s, k, num){
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1);
        }else{
            map.set(s[i], 1);
        }
    }
    let i = 0;
    while(i < s.length && map.get(s[i]) >= k){
        i++;
    }
    if(i === s.length){
        return s.length;
    }
    let left = helper(s.substring(0, i), k, num);
    while(i < s.length && map.get(s[i]) < k){
        i++;
    }
    let right = helper(s.substring(i), k, num);
    return Math.max(left, right);
};