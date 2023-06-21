/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let res = 0;
    for (let i = 0; i < timeSeries.length; i++) {
        if (i === timeSeries.length - 1) {
            res += duration;
        } else {
            res += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
        }
    }
    return res;  
};
