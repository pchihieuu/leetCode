
class Solution {
    ///7. Reverse Integer
    // author: Phan Chí Hiếu
    // github: https://github.com/Phanhieu1221
    /*https://leetcode.com/problems/reverse-integer/ */
    public int reverse(int x) {
        boolean isNagative = false;
        if(x < 0) {
            isNagative = true;
            x = -x;
        }
        long reverse = 0;
        while(x > 0) {
            reverse = reverse * 10 + x % 10;
            x /= 10;
        }
        if(reverse > Integer.MAX_VALUE){
            return 0;
        }
        return (int)(isNagative ? -reverse : reverse);
    }

    
}
