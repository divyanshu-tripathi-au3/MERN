// Given a binary tree, connect each node with its level order successor. 
// The last node of each level should point to the first node of the next level.

const Deque = require('collections/deque'); 
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.next = null;
    }
  
  
    
    print_tree() {
      
      let current = this;
      while (current !== null) {
        console.log(`${current.val} `);
        current = current.next;
      }
    }
  }
  
  function connect_all_siblings(root) {
    if (root === null) {
      return;
    }
  
    const queue = new Deque();
    queue.push(root);
    let currentNode = null,
      previousNode = null;

    while (queue.length > 0) {
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
  
  const root = new TreeNode(12);
  root.left = new TreeNode(1);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(2);
  root.right.left = new TreeNode(5);
  root.right.right = new TreeNode(4);
  connect_all_siblings(root);
  root.print_tree();


