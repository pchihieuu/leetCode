/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    this.rects = rects;
    this.sums = [];
    let sum = 0;
    for (let rect of rects) {
        sum += (rect[2] - rect[0] + 1) * (rect[3] - rect[1] + 1);
        this.sums.push(sum);
    }
    this.total = sum;
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    let rand = Math.floor(Math.random() * this.total);
    let index = this.sums.findIndex(sum => sum > rand);
    let rect = this.rects[index];
    let x = Math.floor(Math.random() * (rect[2] - rect[0] + 1)) + rect[0];
    let y = Math.floor(Math.random() * (rect[3] - rect[1] + 1)) + rect[1];
    return [x, y];
};


/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */