class Solution {
    ///394. Decode String
    // author: Phan Chí Hiếu
    // github: https://github.com/Phanhieu1221
    /* https://leetcode.com/problems/decode-string/*/
    public String decodeString(String s) {
        StringBuilder sr = new StringBuilder();
        while(i < s.length() && s.charAt(i) != ']') 
            if(Character.isDigit(s.charAt(i))) {
                int k = 0;
                while(i < s.length() && Character.isDigit(s.charAt(i)))
                    k = k * 10 +(s.charAt(i++) - '0');
                ++i;
                final String decodeString = decodeString(s);
                ++i;
                while(k --> 0)
                    sr.append(decodeString);
            } else {
                sr.append(s.charAt(i++));
            }
            return sr.toString();
        
    }
    private int i = 0;
    
}
