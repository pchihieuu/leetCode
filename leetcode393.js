/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    let i = 0;
    while(i < data.length) {
        let count = 0;
        let n = data[i];
        if((n & 128) === 0) {
            i++;
            continue;
        }
        while((n & 128) !== 0) {
            count++;
            n = n << 1;
        }
        if(count === 1 || count > 4) {
            return false;
        }
        for(let j = 1; j < count; j++) {
            if(i + j >= data.length) {
                return false;
            }
            if((data[i + j] & 192) !== 128) {
                return false;
            }
        }
        i += count;
    }
    return true;
};