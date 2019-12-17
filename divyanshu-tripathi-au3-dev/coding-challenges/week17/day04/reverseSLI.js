// Reverse a single linked list
// Given pointer to the head node of a linked list, the task is to reverse the linked list. 
// We need to reverse the list by changing links between nodes.
// Input: Head of following linked list
// 1->2->3->4->NULL
// Output: Linked list should be changed to,
// 4->3->2->1->NULL

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
   

  function reverse(head) {
    new_head = head;
    old_head = head.next;
    new_head.next = null; 
    while (old_head) {
        current = old_head;
        old_head = old_head.next;
        current.next = new_head;
        new_head = current;
    }
    return new_head;
}

 
 nodeA =  new Node(1);
 nodeB = nodeA.next = new Node(2);
 nodeC = nodeB.next = new Node(3);
 nodeD = nodeC.next = new Node(4);
console.log(nodeA);

nodeA = reverse(nodeA);
console.log(nodeA);