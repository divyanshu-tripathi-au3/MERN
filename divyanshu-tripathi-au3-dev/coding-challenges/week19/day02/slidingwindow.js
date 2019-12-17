// Pattern: Sliding Window
// Use the same pattern as yesterday's CC with little modifications
// Given an array of positive numbers and a positive number ‘S’, 
// find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. 
// Return 0, if no such subarray exists.
// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

var minSubArrayLen = function(s, nums) {
    if (nums.length === 0) return 0;
    const slideWindow = [];
    let acc = 0;
    let min = null;
  
    for (let i = 0; i < nums.length + 1; i++) {
      const num = nums[i];
  
      while (acc >= s) {
        if (min === null || slideWindow.length < min) {
          min = slideWindow.length;
        }
        acc = acc - slideWindow.shift();
      }
  
      slideWindow.push(num);
  
      acc = slideWindow.reduce((a, b) => a + b, 0);
    }
  
    return min || 0;
    
  };


console.log(minSubArrayLen(7, [2, 1, 5, 2, 3, 2]))
console.log(minSubArrayLen(7, [2, 1, 5, 2, 8]))
console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
console.log(minSubArrayLen(4, [1, 1, 1, 1, 2, 1,3]))
console.log(minSubArrayLen(22, [84,-37,32,40,95]))
console.log(minSubArrayLen(7, [2, 1, 1, 0, 1, 1]))











// var minSubArrayLen = function(s, nums) {
//     var ans = Number.MAX_VALUE;
//     var n = nums.length;
//     // start pos
//     for (var i = 0; i < n; i++) {
//         var sum = 0;
//         for (var j = i; j < n; j++) {
//             sum += nums[j];
//             if (sum < s) continue;
//             if (j - i + 1 >= ans) break;
//             ans = j - i + 1;
//             break;
//         }
//     }
  
//     return ans === Number.MAX_VALUE ? 0 : ans;
//   };


