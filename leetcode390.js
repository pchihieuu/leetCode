/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    let left = true;
    let step = 1;
    let head = 1;
    let remain = n;
    while(remain > 1){
        if(left || remain % 2 === 1){
            head += step;
        }
        remain = Math.floor(remain / 2);
        step *= 2;
        left = !left;
    }
    return head;
};