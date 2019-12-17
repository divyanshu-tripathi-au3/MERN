
// Given a binary tree, populate an array to represent its zigzag level order traversal. 
// You should populate the values of all nodes of the first level from left to right, 
// then right to left for the next level and keep alternating in the same manner for the following levels.


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


     zigzag(root) {
        var maxn = -1;
        var result = [];
    
        dfs(root, 0);
    
        function dfs(node, step) {
        if (!node)
            return;
    
        maxn = step > maxn ? step : maxn;
    
        if (!result[step])
            result[step] = [];
    
        result[step].push(node.val);
    
        dfs(node.left, step + 1);
        dfs(node.right, step + 1);
        }
    
        for (var i = 0; i <= maxn; i++)
        (i & 1) && (result[i].reverse());
    
        return result;
    };

   
  }


  const bst = new BST(15)

