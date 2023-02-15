import java.util.*;
/// 409. Longest Palindrome
// author: Phan Chí Hiếu
// github: https://github.com/Phanhieu1221
/*https://leetcode.com/problems/longest-palindrome/*/
class Solution {
    public long longestPalindrome(String s) {
        Set<Character> trace = new HashSet<Character>();
        int ans = 0;
        for(int i = 0; i < s.length(); i++) {
            char x = s.charAt(i);
            if (trace.contains(x)) {
                trace.remove(x);
                ans += 2;
            } else {
                trace.add(x);
            }

        }
        return (trace.isEmpty()) ? ans : ans + 1;
    }
 
}
