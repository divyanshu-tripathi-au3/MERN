// Given a binary tree and a number ‘S’, 
// find all paths in the tree such that the sum of all the node values of each path equals ‘S’. 
// Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

function TreeNode(val) {
         this.val = val;
         this.left = this.right = null;
     }
    
  
   const pathSum = function pathSum(root, sum) {
     if (!root) {
       return 0;
     }
   
     const findPath = (node, target) => {
       if (!node) {
         return 0;
       }
       const current = node.val === target ? 1 : 0;
       return (
         current
         + findPath(node.left, target - node.val)
         + findPath(node.right, target - node.val)
       );
     };
   
      return findPath(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
       
   };


const root  = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(2);

root.right.left = new TreeNode(3);
root.right.right = new TreeNode(4);

console.log(pathSum(root, 11))
console.log(pathSum(root, 6))
console.log(pathSum(root, 22))