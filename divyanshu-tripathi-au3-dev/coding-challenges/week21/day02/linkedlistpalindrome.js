
// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.
// Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.
// Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
// Output: true
// Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
// Output: false

 function Node(val) {
     this.val = val;
     this.next = null;
 }


var isPalindrome = function(head) {
    const stack = [];
    let current = head;
  
    while (current) {
      stack.push(current.val);
      current = current.next;
    }
  
    current = head;
    const halfStackLen = stack.length >> 1;
    for (let i = 0; i < halfStackLen; i += 1) {
      if (current.val !== stack.pop()) {
        return false;
      }
      current = current.next;
    }
  
    return true;
};

const head = new Node(2);
  head.next = new Node(4);
  head.next.next = new Node(6);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(2);
  head.next.next.next.next.next = new Node(2);
 


  console.log(isPalindrome(head))