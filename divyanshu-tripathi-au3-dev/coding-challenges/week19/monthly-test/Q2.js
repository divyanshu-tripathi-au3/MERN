
// Given an array containing 0s, 1s and 2s, sort the array in-place. 
// You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

// The flag of the Netherlands consists of three colors: 
// red, white and blue; and since our input array also consists of three different numbers
// that is why it is called Dutch National Flag problem.

//     Input: [1, 0, 2, 1, 0]
//     Output: [0 0 1 1 2]


const DutchNational = function(nums) {
    const len = nums.length;
    if (len <= 1) {
      return nums;
    }

    let zeroIndex = 0;
    let secondIndex = len - 1;
  
    for (let i = 0; i <= secondIndex; i += 1) {
        
      while (nums[i] === 2 && i < secondIndex) {
        const temp = nums[secondIndex];
        nums[secondIndex] = nums[i];
        nums[i] = temp;
        secondIndex -= 1;
      }

      while (nums[i] === 0 && i > zeroIndex) {
        const temp = nums[zeroIndex];
        nums[zeroIndex] = nums[i];
        nums[i] = temp;
        zeroIndex += 1;
      }
    }
  
    return nums;
  };
  console.log(DutchNational([1, 0, 2, 1, 0]))