var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
            let h = heights[stack.pop()];
            let w = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
    }
    while (stack.length) {
        let h = heights[stack.pop()];
        let w = stack.length ? heights.length - stack[stack.length - 1] - 1 : heights.length;
        maxArea = Math.max(maxArea, h * w);
    }
    return maxArea;
};