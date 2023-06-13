var restoreIpAddresses = function(s) {
    let result = [];
    let temp = [];
    let len = s.length;
    if (len < 4 || len > 12) {
        return result;
    }
    let dfs = (start, temp) => {
        if (temp.length === 4) {
            if (start === len) {
                result.push(temp.join('.'));
            }
            return;
        }
        for (let i = 1; i <= 3; i++) {
            if (start + i > len) {
                break;
            }
            let str = s.substring(start, start + i);
            if (str.length > 1 && str[0] === '0') {
                break;
            }
            if (Number(str) > 255) {
                break;
            }
            temp.push(str);
            dfs(start + i, temp);
            temp.pop();
        }
    }
    dfs(0, temp);
    return result;
};