/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let left = 0
    let right = citations.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (citations[mid] >= citations.length - mid) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return citations.length - left
};