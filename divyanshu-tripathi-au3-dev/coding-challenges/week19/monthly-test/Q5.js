
// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Your goal is to reach the last index in the minimum number of jumps.

// Input: [2,3,1,1,4]
// Output: 2

// Explanation: The minimum number of jumps to reach the last index is 2.
//     Jump 1 step from index 0 to 1, then 3 steps to the last index.


const lastindexjump = function(nums) {

    let maximum = 0;
    let recent = 0;
    let jumpCount = 0;

    for (let i = 0; i < nums.length; i += 1) {
      if (maximum >= nums.length - 1) break;

      if (i > maximum) {
        maximum = recent;
        jumpCount += 1;
      }
      recent = Math.max(recent, i + nums[i]);
    }

    return jumpCount;
  };

  console.log(lastindexjump([2,3,1,1,4]))
  console.log(lastindexjump([2,3,1,1,4,1,5]))