/*
 * @lc app=leetcode id=391 lang=javascript
 *
 * [391] Perfect Rectangle
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
    let rectanglesArray = [];
    rectangles.forEach(rectanglePoints => {
        rectanglesArray.push(new Rectangle(rectanglePoints));
    });

    // Check if the sum of each individual rectangle area is the same as the bounding rect area e.g. no overlapping
    let boundingRect = getBoundingRect(rectanglesArray);
    let rectanglesTotalArea = rectanglesArray.map(el => el.area).reduce((acc, el) => acc + el);
    if (boundingRect.area != rectanglesTotalArea)
        return false;

    let pointsMap = new Set();
    rectanglesArray.forEach(rectangle => {
        addPointIfEmpty(pointsMap, rectangle.topLeft);
        addPointIfEmpty(pointsMap, rectangle.topRight);
        addPointIfEmpty(pointsMap, rectangle.bottomLeft);
        addPointIfEmpty(pointsMap, rectangle.bottomRight);
    });

    if (pointsMap.size != 4 ||
        !pointsMap.has(boundingRect.topLeft[0] + ' ' + boundingRect.topLeft[1]) ||
        !pointsMap.has(boundingRect.topRight[0] + ' ' + boundingRect.topRight[1]) ||
        !pointsMap.has(boundingRect.bottomLeft[0] + ' ' + boundingRect.bottomLeft[1]) ||
        !pointsMap.has(boundingRect.bottomRight[0] + ' ' + boundingRect.bottomRight[1]))
        return false;
    else return true;
};

/**
 * @param {Set} pointsMap A JS Set representing a point map.
 * @param {Number[]} point A tuple of integers, representing one point.
 */
let addPointIfEmpty = function (pointsMap, point) {
    let pointKey = point[0] + ' ' + point[1];
    if (pointsMap.has(pointKey))
        pointsMap.delete(pointKey);
    else pointsMap.add(pointKey);
};

/**
 * @param {Rectangles[]} rectangles Input rectangles.
 */
let getBoundingRect = function (rectangles) {
    let boundingBottomLeft = [Number.MAX_VALUE, Number.MAX_VALUE];
    let boundingTopRight = [0, 0];

    rectangles.forEach(rectangle => {
        if (rectangle.bottomLeft[0] < boundingBottomLeft[0])
            boundingBottomLeft[0] = rectangle.bottomLeft[0]
        if (rectangle.bottomLeft[1] < boundingBottomLeft[1])
            boundingBottomLeft[1] = rectangle.bottomLeft[1]
        if (rectangle.topRight[0] > boundingTopRight[0])
            boundingTopRight[0] = rectangle.topRight[0]
        if (rectangle.topRight[1] > boundingTopRight[1])
            boundingTopRight[1] = rectangle.topRight[1]
    });

    return new Rectangle([boundingBottomLeft[0], boundingBottomLeft[1], boundingTopRight[0], boundingTopRight[1]]);
};

/**
 * Rectangle utility class.
 * @param {Number[]} coordinates Set of points representing a rectanble.
 */
let Rectangle = class {
    constructor(coordinates) {
        this.bottomLeft = [coordinates[0], coordinates[1]];
        this.topRight = [coordinates[2], coordinates[3]];
        this.bottomRight = [coordinates[0], coordinates[3]];
        this.topLeft = [coordinates[2], coordinates[1]];
        this.area = (this.topRight[1] - this.bottomLeft[1]) * (this.topRight[0] - this.bottomLeft[0])
    }
};
// @lc code=end
