import java.util.ArrayDeque;
import java.util.Deque;

public class leetcode232 {
//232. Implement Queue using Stacks
//author: Phan Chi Hieu
    class MyQueue {
        private Deque<Integer> input = new ArrayDeque<>();
        private Deque<Integer> output = new ArrayDeque<>();
    
        public MyQueue() {
            
        }
        
        public void push(int x) {
            input.push(x);
            
        }
        
        public int pop() {
            peek();
            return output.pop();
            
        }
        
        public int peek() {
            if(output.isEmpty())
                while(!input.isEmpty())
                    output.push(input.pop());
                return output.peek();
            
        }
        
        public boolean empty() {
            return input.isEmpty() && output.isEmpty();
    
            
        }
    }
    
    /**
     * Your MyQueue object will be instantiated and called as such:
     * MyQueue obj = new MyQueue();
     * obj.push(x);
     * int param_2 = obj.pop();
     * int param_3 = obj.peek();
     * boolean param_4 = obj.empty();
     */
}

