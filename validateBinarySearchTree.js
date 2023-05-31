var isValidBST = function(root) {
    if (root === null) return true;
    if (root.left === null && root.right === null) return true;
    const stack = [root];
    let cur = root;
    let pre = null;

    function insertAllLefts(cur) {
        while(cur && cur.left) {
            const l = cur.left;
            stack.push(l);
            cur = l;
        }
    }
    insertAllLefts(cur);

    while(cur = stack.pop()) {
        if (pre && cur.val <= pre.val) return false;
        const r = cur.right;

        if (r) {
            stack.push(r);
            insertAllLefts(r);
        }
        pre = cur;
    }

    return true;
};