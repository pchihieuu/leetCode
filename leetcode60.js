/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let result = "";
    let factorial = [1];
    let nums = [];
    for (let i = 1; i <= n; i++) {
        factorial.push(factorial[i - 1] * i);
        nums.push(i);
    }
    k--;
    for (let i = 1; i <= n; i++) {
        let index = Math.floor(k / factorial[n - i]);
        result += nums[index];
        nums.splice(index, 1);
        k -= index * factorial[n - i];
    }
    return result;
};