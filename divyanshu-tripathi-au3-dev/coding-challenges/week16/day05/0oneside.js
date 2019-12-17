// Given an array of random numbers, Push all the zero’s of a given array to the end of the array. 
// For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, 
// it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. 
// The order of all other elements should be same. 
// Expected time complexity is O(n) and extra space is O(1).


function zerosatend(arr) {
    let { length } = arr;
  
    for (let i = 0; i < length; i++) {    
      if (arr[i] === 0) {
        for (let x = i; x < length - 1; x++) {
          [arr[x], arr[x + 1]] = [arr[x + 1], arr[x]];
        }
        i--;
        length--;
      }
    }
    return arr;
}
console.log(zerosatend([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]));


function moveZeroes(nums) {
        
  for (var i = nums.length; i--; ) {
    if (!nums[i]) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
    return nums
};

console.log(moveZeroes([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]));

// =========================================================================

  function zerosatstart(num) {
    let j = 0;
		for (let i=1; i<num.length;i++) {
			if(num[i]==0)
			{
			   let count = i;
			    while (count>j && num[count-1] >0) {
					num[count] = num[count-1];
					num[count-1] = 0;
					count--;
				}
			    j++;
			}
		}
		return num;
    }
 
console.log(zerosatstart([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]));
  


 


// =========================================================================
//   function pushZerosToEnd(arr) {
//         let count = 0;  
    
//         for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) arr[count++] = arr[i]; 
//     }
  
//     while (count < arr.length) arr[count++] = 0;
    
//     return arr;
//   }
  
//   console.log(zeros([1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0]));