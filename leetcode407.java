class Solution {
    ///704. Binary Search
    // author: Phan Chí Hiếu
    // github: https://github.com/Phanhieu1221
    /*https://leetcode.com/problems/binary-search/ */
    public int search(int[] nums, int target) {
        int low = 0, high = nums.length - 1;
        while(low <= high) {
            int mid = low + (low - high) / 2;
            if(nums[mid] == target) return mid;
            else if (nums[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return - 1;
    }

}
