// @lc code=start

var MyStack = function() {
    this.inQueue = []
    this.outQueue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.inQueue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.inQueue.length > 1) {
        this.outQueue.push(this.inQueue.shift())
    }
    const result = this.inQueue.shift()
    while (this.outQueue.length) {
        this.inQueue.push(this.outQueue.shift())
    }
    return result
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    while (this.inQueue.length > 1) {
        this.outQueue.push(this.inQueue.shift())
    }
    const result = this.inQueue.shift()
    this.outQueue.push(result)
    while (this.outQueue.length) {
        this.inQueue.push(this.outQueue.shift())
    }
    return result
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.inQueue.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
