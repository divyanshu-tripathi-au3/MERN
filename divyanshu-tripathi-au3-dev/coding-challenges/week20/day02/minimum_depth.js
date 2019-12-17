// Find the minimum depth of a binary tree. 
// The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.



class Node {
    constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    }
}

const minDepth = function(root) {
  if (!root) {
    return 0;
  }

  const leftDepth = minDepth(root.left) + 1;
  const rightDepth = minDepth(root.right) + 1;

  if (root.right === null) {
    return leftDepth;
  }
  if (root.left === null) {
    return rightDepth;
  }

  return Math.min(leftDepth, rightDepth);
};

const root  = new Node(18);
root.left = new Node(1);
root.right = new Node(2);

root.right.left = new Node(3);
root.right.right = new Node(4);

console.log(minDepth(root))


