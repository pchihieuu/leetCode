package main

// 234. Palindrome Linked List
//author: Phan Chi Hieu
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func isPalinDrome(head *ListNode) bool {
	fast, slow := head, head

	for fast != nil && fast.Next != nil {
		fast = fast.Next.Next
		slow = slow.Next
	}
	slow = reverse2(slow)
	fast = head
	for slow != nil {
		if slow.Val != fast.Val {
			return false
		}
		slow = slow.Next
		fast = fast.Next
	}
	return true
}
func reverse2(head *ListNode) *ListNode {
	var prev *ListNode
	for head != nil {
		next := head.Next
		head.Next = prev
		prev = head
		head = next
	}
	return prev
}
