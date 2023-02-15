class Solution{
    /// 34. Find First and Last Position of Element in Sorted Array
    // author: Phan Chí Hiếu
    // github: https://github.com/Phanhieu1221
    /*https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array */

    public int[] searchRange(int[] nums, int target) {
        int roll = find(target, nums, 0);
        if(roll == nums.length || nums[roll] != target) return new int[] {-1, -1};
        return new int[] { roll, find( target + 1, nums, roll) - 1};

    }
    public int find(int target, int[]arr, int left) {
        int right = arr.length - 1;
        while(left <= right) {
            int mid = left + right >> 1;
            if(arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }
    
}
