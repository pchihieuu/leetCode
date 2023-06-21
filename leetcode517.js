/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function(machines) {
    let sum = machines.reduce((a, b) => a + b, 0)
    if(sum % machines.length !== 0) {
        return -1
    }
    let avg = sum / machines.length
    let res = 0
    let count = 0
    for(let i = 0; i < machines.length; i++) {
        count += machines[i] - avg
        res = Math.max(res, Math.max(Math.abs(count), machines[i] - avg))
    }
    return res
};