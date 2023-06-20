/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.segmentTree = new SegmentTree(nums)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this.segmentTree.update(index, val)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.segmentTree.sumRange(left, right)
};

class SegmentTree {
    constructor(nums) {
        this.inputSize = nums.length;
        this.segments = new Array(2 * this.inputSize).fill(0);

        for (let i = this.inputSize; i < 2 * this.inputSize; ++i) {
            this.segments[i] = nums[i - this.inputSize];
        }
        for (let i = this.inputSize - 1; i > 0; --i) {
            this.segments[i] = this.segments[2 * i] + this.segments[2 * i + 1];
        }
    }

    update(index, value) {
        index += this.inputSize;
        this.segments[index] = value;

        while (index > 0) {
            let left = (index % 2 === 0) ? index : (index - 1);
            let right = (index % 2 === 0) ? (index + 1) : index;

            this.segments[Math.floor(index / 2)] = this.segments[left] + this.segments[right];
            index = Math.floor(index / 2);
        }
    }

    sumRange(left, right) {

        let sum = 0;
        left += this.inputSize;
        right += this.inputSize;

        while (left <= right) {
            if (left % 2 === 1) {
                sum += this.segments[left];
                ++left;
            }
            if (right % 2 === 0) {
                sum += this.segments[right];
                --right;
            }

            left = Math.floor(left / 2);
            right = Math.floor(right / 2);
        }

        return sum;
    }
};
/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */