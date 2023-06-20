/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    let n = minutesToTest / minutesToDie + 1;
    let pigs = 0;
    while(Math.pow(n, pigs) < buckets) {
        pigs++;
    }
    return pigs;
};