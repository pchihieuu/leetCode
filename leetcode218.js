/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    const data = [];
    for (let [x1, x2, h] of buildings) {
        data.push([x1, h], [x2, -h]);
    }

    data.sort(([x1, h1], [x2, h2]) => x1 - x2 || h2 - h1);    
    const heights = [];
    const addHeight = (heights, h) => {
        let left = 0;
        let right = heights.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (heights[mid] >= h) {
                right = mid - 1;
            }  else {
                left = mid + 1;
            }
        }
        heights.splice(left, 0, h);
    }
    
    const removeHeight = (heights, h) => {
        let left = 0;
        let right = heights.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (heights[mid] >= h) {
                right = mid - 1;
            }  else {
                left = mid + 1;
            }
        }
        heights.splice(left, 1);
    }
    
    const answer = [];
    let previousHeight = 0;
    for (let [x, h] of data) {
        if (h > 0) {
            addHeight(heights, h);
        } else {
            removeHeight(heights, -h);
        }
        let currentHeight = heights[heights.length - 1] || 0;
        if (currentHeight !== previousHeight) {
            answer.push([x, currentHeight]);
            previousHeight = currentHeight;
        }
    }
    return answer;
};