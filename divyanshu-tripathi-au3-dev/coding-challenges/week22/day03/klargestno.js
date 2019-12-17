// Given an unsorted array of numbers, find the ‘K’ largest numbers in it.
// Input: [3, 1, 5, 12, 2, 11], K = 3
// Output: [5, 12, 11]
// Input: [5, 12, 11, -1, 12], K = 3
// Output: [12, 11, 12]
// Time Complexity: O(n log(k))

const Heap = require('collections/heap'); 

function topknumbers(nums, k) {
  const minHeap = new Heap([], null, ((a, b) => b - a));
 
  for (i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  for (i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }
  
  return minHeap.toArray();
}


console.log(topknumbers([3, 1, 5, 12, 2, 11], 3));

