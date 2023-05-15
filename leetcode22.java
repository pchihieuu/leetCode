import java.util.*;

public class leetcode22 {
    // Generate Parentheses
    //author: Phan Chi Hieu
    public List<String> generateParenthesis(int n) {
        List<String> ans = new ArrayList<>();
        dfs(n, n, new StringBuilder(), ans);
        return ans;
    }
    private void dfs(int l, int r, final StringBuilder str, List<String> temp) {
        if(l == 0 && r == 0) {
            temp.add(str.toString());
            return;
        }
        if(l > 0) {
            str.append("(");
            dfs(l - 1,r, str, temp);
            str.deleteCharAt(str.length() - 1);

        }
        if(l < r) {
            str.append(")");
            dfs(l, r - 1, str, temp);
            str.deleteCharAt(str.length() - 1);

        }
    }
}
