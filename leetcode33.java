
class Solution {
    ///33. Search in Rotated Sorted Array
    // author: Phan Chí Hiếu
    // github: https://github.com/Phanhieu1221
    public int search(int[] nums, int target) {
        // Special case
        if(nums == null || nums.length == 0) {
            return -1;
        }
         // Left and right pointers in the array
        int left = 0;
        int right = nums.length - 1;
         // First step is to find the pivot where the
        // array is rotated
        while(left < right) {
            // Middle pointer
            int mid = left + (right - left) / 2;
            // If the element at the mid is greater than
            // the element at the right then we can say that
            // the array is rotated after middle index
            if(nums[mid] > nums[right]) {
                left = mid + 1;
            // Else, the pivot is in the left part
            } else {
                right = mid;
            }
        }
         // After the above loop is completed, then the
        // left index will point to the pivot
        int pivot = left;
        left = 0;
        right = nums.length - 1;
        // Now we will find in which half of the array,
        // our target is present
        if(target >= nums[pivot] && target <= nums[right]) {
            left = pivot;
        } else {
            right = pivot;
        }  
         // Now perform normal binary search
        while(left <= right) {
            int mid = left + (right - left) / 2;
            if(nums[mid] == target) {
                return mid;

            } else if(target < nums[mid]) {
                right = mid - 1;

            } else {
                left = mid + 1;
            }
        }
        return -1;
    }
    
}
