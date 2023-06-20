/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    let res = [];
    let qi = new MinPriorityQueue();
    let qj = new MinPriorityQueue();
    for (let i = 0; i < intervals.length; i++) {
        qi.enqueue({ i, val: intervals[i] }, intervals[i][1]);
        qj.enqueue({ i, val: intervals[i] }, intervals[i][0]);
    }
    while (qi.size()) {
        while (qj.size() && qj.front().element.val[0] < qi.front().element.val[1]) {
            qj.dequeue();
        }
        res[qi.dequeue().element.i] = qj.size() ? qj.front().element.i : -1;
    }
    return res;
};