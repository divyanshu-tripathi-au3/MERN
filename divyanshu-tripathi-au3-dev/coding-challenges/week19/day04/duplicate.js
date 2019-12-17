// Two Pointers
// Given an array of sorted numbers, remove all duplicates from it. 
// You should not use any extra space; after removing the duplicates in-place return the new length of the array.
// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
// Input: [2, 2, 2, 11]
// Output: 2
// Explanation: The first two elements after removing the duplicates will be [2, 11].


const removeDuplicates = function(nums) {
    const len = nums.length;
    let i = 0;
    for (let j = 1; j < len; j += 1) {
      if (nums[i] !== nums[j]) {
        i += 1;
        nums[i] = nums[j];
      }
    }
    return i + 1;
  };

  console.log(removeDuplicates([2, 2, 2, 11]))
  console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]))