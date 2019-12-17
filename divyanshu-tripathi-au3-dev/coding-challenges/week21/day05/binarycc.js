// Given a binary tree, connect each node with its level order successor. 
// The last node of each level should point to a null node.




const Deque = require('collections/deque'); 

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  
  print_level_order() {
    
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;

      while (current != null) {
        
       console.log(`${current.val} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log();
    }
  }
}

function connect_level_order_siblings(root) {
  if (root === null) {
    return;
  }

  const queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    let previousNode = null,
      levelSize = queue.length;
   
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      if (previousNode !== null) {
        previousNode.next = currentNode;
      }
      previousNode = currentNode;
     
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
}


const root = new TreeNode(12);
root.left = new TreeNode(5);
root.right = new TreeNode(6);
root.left.left = new TreeNode(7);
root.right.left = new TreeNode(8);
root.right.right = new TreeNode(9);
connect_level_order_siblings(root);

root.print_level_order();