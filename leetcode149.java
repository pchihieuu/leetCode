import java.util.HashMap;
import java.util.Map;

public class leetcode149 {
    //149. Max Points on a Line
    //author: Phan Chi Hieu
    class Solution {
        int X = 0;
        int Y = 1;
        public int maxPoints(int[][] points) {
            if (points == null || points.length == 0) return 0;
            int result = 0;
            Map<String, Integer> map = new HashMap<>();
            for (int i = 0; i < points.length; i++) { // for loop to try all points. O(n^2)
                int max = 0, overlap = 0;
                map.clear();
                for (int j = i + 1; j < points.length; j++) {
                    int x = points[j][X] - points[i][X], y = points[j][Y] - points[i][Y];
                    if (x == 0 && y == 0) {
                        overlap++;
                        continue;
                    }
                    int gcd = findGCD(x, y);
                    if (gcd != 0) {
                        x /= gcd;
                        y /= gcd;
                    }
                    String key = x + "@" + y;
                    if (map.containsKey(key)) map.put(key, map.get(key) + 1);
                    else map.put(key, 1);
                    max = Math.max(max, map.get(key));
                }
                result = Math.max(result, max + overlap + 1); // # max num on certain slop + # of overlaop points + self
            }
            return result;
        }
    
        private int findGCD(int a, int b) {
            if (b == 0) return a;
            return findGCD(b, a % b);
        }
    }
}
