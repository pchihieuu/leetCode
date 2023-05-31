/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
    if(k + maxPts <= n || k == 0) {
        return 1
    }
    let a = new  Array(k + maxPts).fill(0)
    a[0] = 1
    let sum = 1
    for(let i = 1; i < k + maxPts; i++) {
        a[i] = sum / maxPts
        if(i < k)
            sum += a[i]
        if(i - maxPts >= 0)
            sum -= a[i - maxPts]
    }
    let result = 0
    for(let i = k; i <= n; i++) {
        result += a[i]
    }
    return result
};