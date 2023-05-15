public class leetcode11 {
    //Container With Most Water
    // author : Phan Chi Hieu
    public int maxArea(int[] height) {
        int ans = 0;
        int l = 0;
        int r = height.length - 1;

    while (l < r) {
        final int minHeight = Math.min(height[l], height[r]);
        ans = Math.max(ans, minHeight * (r - l));
        if (height[l] < height[r])
            ++l;
        else
            --r;
    }

        return ans;
    }
}
