// Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.
// If the total number of nodes in the LinkedList is even, return the second middle node.
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
// Output: 3
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// Output: 4
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
// Output: 4
// Time Complexity: O(n), You should loop on the linked list only once. 
// You shouldn't  count the number of nodes to find the middle.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


function find_middle_of_linked_list(head) {
  let slow = head,
    fast = head;
  while ((fast !== null && fast.next !== null)) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}


head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next = new Node(6);
console.log(`${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next.next = new Node(7);
console.log(`${find_middle_of_linked_list(head).value}`);