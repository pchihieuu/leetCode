/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    const ipv4 = queryIP.split('.')
    const ipv6 = queryIP.split(':')
    if (ipv4.length === 4) {
        for (let i = 0; i < 4; i++) {
            if (ipv4[i].length === 0 || ipv4[i].length > 3) {
                return 'Neither'
            }
            if (ipv4[i][0] === '0' && ipv4[i].length > 1) {
                return 'Neither'
            }
            for (let j = 0; j < ipv4[i].length; j++) {
                if (ipv4[i][j] < '0' || ipv4[i][j] > '9') {
                    return 'Neither'
                }
            }
            if (parseInt(ipv4[i]) > 255) {
                return 'Neither'
            }
        }
        return 'IPv4'
    }
    if (ipv6.length === 8) {
        for (let i = 0; i < 8; i++) {
            if (ipv6[i].length === 0 || ipv6[i].length > 4) {
                return 'Neither'
            }
            for (let j = 0; j < ipv6[i].length; j++) {
                if ((ipv6[i][j] < '0' || ipv6[i][j] > '9') && (ipv6[i][j] < 'a' || ipv6[i][j] > 'f') && (ipv6[i][j] < 'A' || ipv6[i][j] > 'F')) {
                    return 'Neither'
                }
            }
        }
        return 'IPv6'
    }
    return 'Neither'
};