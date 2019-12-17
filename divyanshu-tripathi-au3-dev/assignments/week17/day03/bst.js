//  Implement the below functions for BST
// 1) insertion
// 2) findMin
// 3) findElement

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
  }


const bst = new BST(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

console.log(bst.size())

console.log(bst.min())

console.log(bst.contains(2))
console.log(bst.contains(9))




