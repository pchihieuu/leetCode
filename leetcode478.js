/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function(radius, x_center, y_center) {
    this.radius = radius
    this.x_center = x_center
    this.y_center = y_center
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    let x = Math.random() * 2 - 1
    let y = Math.random() * 2 - 1
    while (x * x + y * y > 1) {
        x = Math.random() * 2 - 1
        y = Math.random() * 2 - 1
    }
    return [x * this.radius + this.x_center, y * this.radius + this.y_center]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */