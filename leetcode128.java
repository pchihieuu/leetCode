import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

public class leetcode128 {
    public int longestConsecutive(int[] nums) {
        int ans = 0;
        Set<Integer> seen = Arrays.stream(nums).boxed().collect(Collectors.toSet());

        for (int num : nums) {
        // Num is the start of a sequence
            if (seen.contains(num - 1))
                continue;
            int length = 1;
            while (seen.contains(++num))
                ++length;
                ans = Math.max(ans, length);
        }

        return ans;
    }
}
