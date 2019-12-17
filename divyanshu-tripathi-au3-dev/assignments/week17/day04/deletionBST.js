
class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
   
    
    size() {
        return this.count
        }
    
    remove(data) {
      const removeNode = function(node, data) {
        if (node == null) {
          return null;
        }
        if (data == node.data) {
          
          if (node.left == null && node.right == null) {
            return null;
          }
        
          if (node.left == null) {
            return node.right;
          }
          
          if (node.right == null) {
            return node.left;
          }
         
          var tempNode = node.right;
          while (tempNode.left !== null) {
            tempNode = tempNode.left;
          }
          node.data = tempNode.data;
          node.right = removeNode(node.right, tempNode.data);
          return node;
        } else if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else {
          node.right = removeNode(node.right, data);
          return node;
        }
      }
      this.root = removeNode(this.root, data);
    }
    isBalanced() {
      return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }
  
  }
  
  
  
  const bst = new BST();
  
  bst.insert(3)
  bst.insert(36)
  bst.insert(2)
  bst.insert(12)
  bst.insert(28)
  bst.insert(39)
  
 console.log(bst)
 console.log(bst.size())

 bst.remove(39)
 console.log(bst.size())