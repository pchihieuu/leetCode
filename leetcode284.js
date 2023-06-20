/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

var PeekingIterator = function(iterator) {
    this.iter = iterator;
    this.cache = null;  
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    if (this.cache === null) {
        this.cache = this.iter.next();
    }
    return this.cache;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    if (this.cache !== null) {
        let temp = this.cache;
        this.cache = null;
        return temp;
    }
    return this.iter.next();
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    return this.cache !== null || this.iter.hasNext();
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */