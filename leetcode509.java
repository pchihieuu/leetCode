class Solution {
    ///509. Fibonacci Number
    // author: Phan Chí Hiếu
    // github: https://github.com/Phanhieu1221
    /*https://leetcode.com/problems/fibonacci-number/ */
    public int fib(int n) {
        if (n < 2)
            return n;
        
        int []dep = {0, 0, 1};
        for(int i =2; i <= n; i++) {
            dep[0] = dep[1];
            dep[1] = dep[2];
            dep[2] = dep[0] + dep[1];
        }
        return dep[2];
    }
}
