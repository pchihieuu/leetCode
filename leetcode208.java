public class leetcode208 {
    //208. Implement Trie (Prefix Tree)
    //author: Phan Chi Hieu
    class Trie {

        public Trie() {
            
        }
        
        public void insert(String word) {
            TrieNode node = root;
            for(final char c : word.toCharArray()) {
                final int i = c- 'a';
                if(node.child[i] == null) 
                    node.child[i] = new TrieNode();
                node = node.child[i];
            }
            node.isSame = true;
            
        }
        
        public boolean search(String word) {
            TrieNode node = find(word);
            return node != null && node.isSame;
        }
        
        public boolean startsWith(String prefix) {
            return find(prefix) != null;
        }
        private TrieNode root = new TrieNode();
    
        private TrieNode find(String prefix) {
            TrieNode node = root;
            for(final char c : prefix.toCharArray()) {
                final int i = c - 'a';
                if(node.child[i] == null)
                    return null;
                node = node .child[i];
    
            }    
            return node;
        }
    }
    class TrieNode {
        public TrieNode[] child = new TrieNode[26];
        public boolean isSame = false;
    
    }
    
    /**
     * Your Trie object will be instantiated and called as such:
     * Trie obj = new Trie();
     * obj.insert(word);
     * boolean param_2 = obj.search(word);
     * boolean param_3 = obj.startsWith(prefix);
     */
}
