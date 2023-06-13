/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    // to check if two words can connect
    let connected = (a,b) => {
        let c = 0
        for (let i = 0; i < a.length && c < 2; i++) {
            if (a[i] !== b[i]) c++
        }
        return c == 1
    }

    // dictionary to help us search words faster
    // and to trackback what word was used
    let dict = new Set(wordList);
    if (dict.has(endWord) == false) return []
    dict.delete(beginWord)
    let queue = [beginWord]
    let nodes = []
    
    // find all ways from beginning
    // level by level, until reach end at a level
    let reached = false;    
    while (queue.length && !reached) {
        // update nodes of paths for this level
        nodes.push(queue.slice())
        // access whole level   
        let qlen = queue.length;
        for (let i = 0; i < qlen && !reached; i++) {
            let from = queue.shift();
            // find all nodes that connect to the nodes of this level
            for (let to of dict) {                
                if (connected(from,to) == false) continue
                // if connect
                // - and one of them is end word
                // - then we can stop moving forward
                if (to == endWord) {
                    reached = true
                    break;
                }
                // - otherwise,
                // - add all connected nodes to the record for the next level
                // - and delete them from dict to prevent revisiting to form cycles
                queue.push(to)                
                dict.delete(to)                
            }
        }
    }

    // try but did not find endWord
    if (!reached) return []
    // move backward to construct paths
    // add nodes to paths in reverse order to have paths from begin to end
    let ans = [[endWord]]
    for (let level = nodes.length - 1; level >= 0; level--) {        
        let alen = ans.length
        for (let a = 0; a < alen; a++) {
            let p = ans.shift()
            let last = p[0]            
            for (let word of nodes[level]) {                
                if (!connected(last, word)) continue                
                ans.push([word, ...p])
            }
        }        
    }
    
    return ans
};