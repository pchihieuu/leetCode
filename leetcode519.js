/**
 * @param {number} m
 * @param {number} n
 */
var Solution = function(m, n) {
    this.m = m
    this.n = n
    this.total = m * n
    this.set = new Set()
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
    let index = Math.floor(Math.random() * this.total)
    while(this.set.has(index)) {
        index = Math.floor(Math.random() * this.total)
    }
    this.set.add(index)
    return [Math.floor(index / this.n), index % this.n]
};

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
    this.set.clear()
};


/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */