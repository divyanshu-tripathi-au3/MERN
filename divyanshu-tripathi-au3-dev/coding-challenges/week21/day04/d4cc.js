// Given the head of a LinkedList and a number ‘k’, 
// reverse every alternating ‘k’ sized sub-list starting from the head.
// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.


class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  
    print_list() {
      let temp = this;
      while (temp !== null) {
        console.log(`${temp.value} `);
        temp = temp.next;
      }
      console.log();
    }
  }
  
  function reverse_alternate_k_elements(head, k) {
    if (k <= 1 || head === null) {
      return head;
    }
  
    let current = head,
      previous = null;
    while (true) {
      const last_node_of_previous_part = previous;
      
      const last_node_of_sub_list = current;
      let next = null; 
  
      
      let i = 0;
      while (current !== null && i < k) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        i += 1;
      }
  
      
      if (last_node_of_previous_part !== null) {
        last_node_of_previous_part.next = previous;
      } else {
        head = previous;
      }
  
    
      last_node_of_sub_list.next = current;
  
     
      i = 0;
      while (current !== null && i < k) {
        previous = current;
        current = current.next;
        i += 1;
      }
  
      if (current === null) {
        break;
      }
    }
    return head;
  }
  
  
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = new Node(7);
  head.next.next.next.next.next.next.next = new Node(8);
  
  console.log('Nodes of original LinkedList are: ');
  head.print_list();
  result = reverse_alternate_k_elements(head, 2);

 console.log('Nodes of reversed LinkedList are: ');
  result.print_list();