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
    let node = null;
    const carry = arguments[2];
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0; // Set l1 value
        const val2 = l2 ? l2.val : 0; // l2 value
        const next1 = l1 ? l1.next : 0; // Checking if next value is not equal to null, l1
        const next2 = l2 ? l2.next : 0; // Checking the same, l2

        const val = carry ? val1 + val2 + 1 : val1 + val2; // Checking if previous equation(s) sum 10 
                                                           // or greater.

        // When adding two elements exceeds 9 (i.e. 10+), carry the 1 to the next placeholder.
        node = new ListNode(val % 10);
        node.next = addTwoNumbers(next1, next2, val >= 10);
    } else if (carry) { // Applying carry if sum val1 + val2 >= 10
        node = new ListNode(1);
        node.next = null;
    }
    return node;
};