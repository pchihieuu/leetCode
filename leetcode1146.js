/*
 * @lc app=leetcode id=1146 lang=javascript
 *
 * [1146] Snapshot Array
 */

// @lc code=start
class SnapshotArray {
    constructor(length) {
        this.elements = Array(length).fill(null).map(el => new Map())   
        this.snapId = 0
    }
    set(index, val) {  
        this.elements[index].set(this.snapId, val)
    }
    snap() {    
        ++this.snapId;
        return this.snapId - 1
    }
    get(index, snap_id) {  
        const element = Array.from(this.elements[index].keys());    
        let left = 0,
            right = element.length - 1,
            mid, id = -1
        while (left <= right) {
            mid = left + Math.floor((right - left) / 2)
            if (element[mid] <= snap_id) {
                id = element[mid]
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return id === -1 ? 0 : this.elements[index].get(id)
    }
}
// @lc code=end