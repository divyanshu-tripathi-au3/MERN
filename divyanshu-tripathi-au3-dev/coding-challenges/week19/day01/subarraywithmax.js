// Given an array of positive numbers and a positive number ‘k’, 
// find the maximum sum of any contiguous subarray of size ‘k’.
// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].
// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].
// Time Complexity: O(n) 

const max_sub_array_of_size_k = function(k, arr) {
   
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length;  windowEnd++) {
        windowSum += arr[windowEnd] 
              
        if (windowEnd >= k-1) {        
          maxSum = Math.max(maxSum, windowSum);
          windowSum -= arr[windowStart]; 
          windowStart++; 
        }
        
    }
    return maxSum;
  };
 
  console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]))
  console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]))
  console.log(max_sub_array_of_size_k(3, [1, 1, 1, 1, 1, 1]))









//   const max_sub_array_of_size_k = function(k, arr) {
  
//     let maxSum = 0;
//     let windowSum = 0;
//     for (let i = 0, len = arr.length; i < len-k; i++) {
//         windowSum = 0;
//         for (let j = i; j < i + k; j++) {
//           windowSum += arr[j]        
//         }
//         maxSum = Math.max(maxSum, windowSum);
//     }
//     return maxSum;
//   };