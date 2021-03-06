/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    var list = new ListNode(0); // for manipulation
    var result = list; // for return

    var carry = 0; // use when sum over 9
    
    while( l1 || l2 || carry > 0 ){
        
        var sum = 0;
        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }
        
        sum = sum + carry; // plus 1 if previous sum was over 10
        list.next = new ListNode(sum%10);
        carry = parseInt(sum/10);
        
        list = list.next;
        
    }
    return result.next;   
};