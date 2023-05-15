public class leetcode55 {
    //Jump Game
    // author: Phan Chi Hieu
    public boolean canJump(int[] nums) {
        int i = 0;
        for(int recept = 0; i < nums.length && i <= recept; i++) {
            recept = Math.max(recept, i + nums[i]);

        }
        return i == nums.length;
    }
}
