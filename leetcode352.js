var SummaryRanges = function() {
    this.intervals = [];
    this.map = Object.create(null);
};

/** 
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {
    if (this.map[value]) {
        return;
    }
    var l = this.map[value - 1] || 0;
    var r = this.map[value + 1] || 0;
    var len = l + r + 1;

    this.map[value - l] = len;
    this.map[value] = len;
    this.map[value + r] = len;
    
    var low = 0;
    var high = this.intervals.length;

    while (low < high) {
        var mid = (low + high) >> 1;
        if (this.intervals[mid][1] < value) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    
    if (len === 1) {
        this.intervals.splice(low, 0, [value, value]);
    } else if (l > 0 && r > 0) {
        var max = this.intervals[low][1];
        this.intervals.splice(low, 1);
        this.intervals[low - 1][1] = max;
    } else if (l > 0) {
        this.intervals[low - 1][1] = value;
    } else {
        this.intervals[low][0] = value;
    }
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    return this.intervals;
};
