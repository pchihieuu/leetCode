public class Solution {
  public int numIndenticalPairs(int[]nums) {
    int x = 0;
    for(int i = 0; i < nums.length;i++) {
      for(int j = i; j < nums.length; j++) {
        if(nums[i] == nums[j] && i < j)
          x++;
      }
    }
    return x;
  }
}
