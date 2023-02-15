public class Solution extends  VersionControl{
    ///278. First Bad Version
    // author: Phan Chí Hiếu
    // github: https://github.com/Phanhieu1221
    /*https://leetcode.com/problems/first-bad-version/ */
    public int firstBadVersion(int n) {
        int left = 0, right = n;
        while(left <= right) {
            final int m = left + (right - left) / 2;
            if(isBadVersion(m)) {
                right = m;
            } else {
                left = m + 1;
            }
        }
        return left;
    }

}