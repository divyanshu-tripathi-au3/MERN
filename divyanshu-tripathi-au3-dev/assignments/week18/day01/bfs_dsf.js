
class Node {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
    }
  }
  
  class BST {
    constructor(value) {
      this.root = new Node(value)
      this.count = 1
    }
  
    size() {
      return this.count
    }
  
    insert(value) {
      this.count++
  
      let newNode = new Node(value)
  
      const searchTree = node => {
      
        if (value < node.value) {
          
          if (!node.left) {
            node.left = newNode
          } 
          
          else {
            searchTree(node.left)
          }
        }
        
        else if (value > node.value) {
       
          if (!node.right) {
            node.right = newNode
          }
          
          else {
            searchTree(node.right)
          }
        }
      }
  
      searchTree(this.root)
    }
  
    min() {
      let currentNode = this.root
  
     
      while (currentNode.left) {
        currentNode = currentNode.left
      }
  
      return currentNode.value
    }
  
    max() {
      let currentNode = this.root
  
   
      while (currentNode.right) {
        currentNode = currentNode.right
      }
  
      return currentNode.value
    }
  
    contains(value) {
      let currentNode = this.root
  
      while (currentNode) {
        if (value === currentNode.value) {
          return true
        }
        if (value < currentNode.value) {
          currentNode = currentNode.left
        } else {
          currentNode = currentNode.right
        }
      }
  
      return false
    }
  
    // depth first search 
  
  
    dfsInOrder() {
      let result = []
  
      const traverse = node => {
       
        if (node.left) traverse(node.left)
       
        result.push(node.value)
      
        if (node.right) traverse(node.right)
      }
  
      traverse(this.root)
  
      return result
    }
  
 
    dfsPreOrder() {
      let result = []
  
      const traverse = node => {
        
        result.push(node.value)
       
        if (node.left) traverse(node.left)      
       
        if (node.right) traverse(node.right)
      }
  
      traverse(this.root)
  
      return result    
    }
  
  
    dfsPostOrder() {
      let result = []
  
      const traverse = node => {
       
        if (node.left) traverse(node.left)      
        
        if (node.right) traverse(node.right)
       
        result.push(node.value)
      }
  
      traverse(this.root)
  
      return result   
    }
  
    
    bfs() {
      let result = []
      let queue = []
  
      queue.push(this.root)
  
      while(queue.length) {
        let currentNode = queue.shift()
  
        result.push(currentNode.value)
  
        if (currentNode.left) {
          queue.push(currentNode.left)
        }
        if (currentNode.right) {
          queue.push(currentNode.right)
        }
      }
  
      return result
    }
  }
  
  const bst = new BST(15)
  
  bst.insert(3)
  bst.insert(36)
  bst.insert(2)
  bst.insert(12)
  bst.insert(28)
  bst.insert(39)
  
  bst.size()
  
  bst.min()
  bst.max()
  
  bst.contains(2)
  bst.contains(9)
  
  
  bst.dfsInOrder()
  
 
  bst.dfsPreOrder()
  
 
  bst.dfsPostOrder()
  

  bst.bfs()
// ======================================================================

BinarySearchTree.prototype.breadthFirstLTR = function() {
    var node = this.root;
    var queue = [node];
    var result = [];
    while (node = queue.shift()) {
        result.push(node.value);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return result;
};


BinarySearchTree.prototype.breadthFirstRTL = function() {
    var node = this.root;
    var queue = [node];
    var result = [];
    while (node = queue.shift()) {
        result.push(node.value);
        node.right && queue.push(node.right);
        node.left && queue.push(node.left);
    }
    return result;
};


// ==============================================================



// function Node(info){

//     this.info = info
//     this.left = null;
//     this.right = null;
//     this.level = null; 
// }

// Node.prototype.toString = function() {
//     return this.info;
// }  

// function BFT(node) {

//      node.level = 1;

//      var queue = [node];

//      var output = [];

//      var current_level = node.level;

//          while(queue.length > 0) {

//                current_node = queue.shift(); 

//                if(current_node.level > current_level) {

//                       current_level++;
//                       output.push("\n");
//                }  

//                output.push(current_node + " ");

//                if(current_node.left) {
//                     current_node.left.level = current_level + 1; 
//                     queue.push(current_node.left); 
//                }  

//                if(current_node.right) {
//                     current_node.right.level = current_level + 1; 
//                     queue.push(current_node.right); 
//                }  
               
//          }

//       return output.join("") 
// }



// var root = new Node(9);
//     root.left = new Node(8);    
//     root.right = new Node(7);

//     root.left.left = new Node(2);
//     root.left.right = new Node(4);

//     root.right.left = new Node(6);
//     root.right.right = new Node(8);

//     root.left.left.left = new Node('a');
//     root.left.left.right = new Node('b');

//     root.left.right.right = new Node('c');

//     alert(BFT(root)) 