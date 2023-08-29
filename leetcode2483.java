class Solution {
    public int bestClosingTime(String customers) {
        int n = customers.length();
        int bestTime = 0;
        int minPenalty = Integer.MAX_VALUE;
        int noCount = 0;
        int customerCount = 0;
        for(int i=0; i<=n; i++){
            int currPenalty = noCount-customerCount;
            if(currPenalty<minPenalty){
                minPenalty = currPenalty;
                bestTime = i;
            }
            if(i==n) continue;
            if(customers.charAt(i)=='Y') customerCount++;
            else noCount++;
        }
        return bestTime;
    }
}
