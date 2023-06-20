/**
 * @param {string[]} words
 * @return {number[][]}
 */
let ispalindrome= function(s){
    let i=0,j=s.length-1;
    
    while(i<j){
        if(s[i++]!=s[j--]){
            return false;
        }
    }
    return true;
} 

var palindromePairs = function(words) {
    var index = new Map();
    var ans = [];
    for(let i=0;i<words.length;i++){
        let s = words[i];
        let rev = s.split("").reverse().join("");
        index.set(rev,i);
        
    }
    if(index.has("")){
        for(let j=0;j<words.length;j++){
            if(index.get("")===j){
                continue;
            }
            if(ispalindrome(words[j])){
                ans.push([index.get(""),j]);
            }
        }
    }
    for(let i=0;i<words.length;i++){
        for(let j=0;j<words[i].length;j++){
            let s = words[i];
            let left = s.substr(0,j);
            let right = s.substr(j,s.length - j); 
            if(index.has(left) && index.get(left)!==i && ispalindrome(right)){
                ans.push([i,index.get(left)]);
            }
            if(index.has(right) && index.get(right)!==i && ispalindrome(left)){
                ans.push([index.get(right),i]);
            }       
        }
    }
    return ans;
};
