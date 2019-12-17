// Given a linked list, check if the linked list has loop or not. Below diagram shows a linked list with a loop.



class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function hasloop(head) {
    let slow = head;
    let fast = head;
    do {
      if (fast.next === null) return false;
      fast = fast.next;
      if (fast.next === null) return false;
      fast = fast.next;
      slow = slow.next;
    } while (slow !== fast);
    return true;
  }
  
  const nodeA = new Node('A');
  const nodeB = nodeA.next = new Node('B');
  const nodeC = nodeB.next = new Node('C');
  const nodeD = nodeC.next = new Node('D');
  const nodeE = nodeD.next = new Node('E');
  console.log(hasloop(nodeA)); 
  nodeE.next = nodeB;
  console.log(hasloop(nodeA));