/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    let max = 0
    for (let house of houses) {
        let min = Number.MAX_SAFE_INTEGER
        for (let heater of heaters) {
            min = Math.min(min, Math.abs(house - heater))
        }
        max = Math.max(max, min)
    }
    return max
};