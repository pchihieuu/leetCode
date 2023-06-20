var RandomizedCollection = function() {
    //create a lookup table to keep track indices of inserted items
    this.map = new Map();
    // create arr to store inserted items
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    // push item in arr
   this.arr.push(val);
    // ckeck if the cut val already in map or not
    // if doesent appear store it as key and create a set for store the indices
        if(!this.map.has(val)){
            this.map.set(val, new Set());
            this.map.get(val).add(this.arr.length - 1);
            return true;
        }else{
            // if appear just add cut index of val in set
            this.map.get(val).add(this.arr.length - 1);
            return false;
        }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    // if val doesent appear in map just return false
       if(!this.map.has(val)){
            return false;
        }
    // else create arr to store all indexes of val in it
        let indexes = Array.from(this.map.get(val));
    // get first index from indexes arr
        let idx = indexes[0];
        var n = this.arr.length;
        let last = this.arr[n - 1];
    // swap the target val with last val in arr
        [this.arr[idx], this.arr[n -1]] = [this.arr[n - 1], this.arr[idx]];
    // clear up
        this.arr.pop();
        this.map.get(val).delete(idx);
    // when we swap items also the indices changed so we need to modify idex 
    // of last swapped item
    if(idx !== n - 1){
        this.map.get(last).delete(n - 1);
        this.map.get(last).add(idx);
    }
    
    if(this.map.get(val).size === 0){
            this.map.delete(val);
        }
    
        return true;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
        let random = Math.floor(Math.random() * this.arr.length);
        return this.arr[random];
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */