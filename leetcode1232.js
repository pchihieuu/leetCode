/*
 * @lc app=leetcode id=1232 lang=javascript
 *
 * [1232] Check If It Is a Straight Line
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    let a = -(coordinates[1][1] - coordinates[0][1])
    let b = coordinates[1][0] - coordinates[0][0]
    return coordinates.every(([x, y]) => a * x + b * y === a * coordinates[0][0] + b * coordinates[0][1])
};
// @lc code=end
