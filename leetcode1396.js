var UndergroundSystem = function() {
    this.checkInMap = new Map()
    this.chekOutMap = new Map()
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkInMap.set(id, [stationName, t])
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [startStation, startTime] = this.checkInMap.get(id)
    const key = `${startStation}-${stationName}`
    const time = t - startTime
    const [sum, count] = this.checkOutMap.get(key) || [0, 0]
    this.checkOutMap.set(key, [sum + time, count + 1])
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const key = `${startStation}-${endSatation}`
    const [sum,count] = this.checkOutMap.get(key)
    return sum / count
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
 var UndergroundSystem = function() {
    this.checkInMap = new Map()
    this.checkOutMap = new Map()
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkInMap.set(id, [stationName, t])
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [startStation, startTime] = this.checkInMap.get(id)
    const key = `${startStation}-${stationName}`
    const time = t - startTime
    const [sum, count] = this.checkOutMap.get(key) || [0, 0]
    this.checkOutMap.set(key, [sum + time, count + 1])
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const key = `${startStation}-${endStation}`
    const [sum, count] = this.checkOutMap.get(key)
    return sum / count
};

