// Given an array, print the Next Greater Element (NGE) for every element.
//  The Next greater Element for an element x is the first greater element on the right side of x in array. 
//  Elements for which no greater element exist, consider next greater element as -1.
// Input:  [4, 5, 2, 25]
// Output:
//   4      -->   5
//   5      -->   25
//   2      -->   25
//   25     -->   -1
// Time Complexity Required: O(n)
// Data structure to use: Stack

var nextGreater = function(A) {
	var stack = [];
	stack.push(A[0]);
	var next = 0;
	var element = 0;
	var ansArr = [];
	
	for (var i = 1; i < A.length; i++) {
		next = A[i];
		if (stack.length !== 0) {
			element = stack.pop(); 
			while (element < next) { 
				ansArr.push(next); 
				
				if (stack.length === 0) {
					break;
				}
				element = stack.pop();
			}
			if (element > next) {
				stack.push(element);
			}
		}
		stack.push(next); 
	}
	
	while (stack.length !== 0) {
		element = stack.pop();
		next = -1;
	
		ansArr.push(next);
	}
	return ansArr;
};

console.log(nextGreater([4, 5, 2, 25]));

// ===========================================================================







// var nextGreaterElement = function(findNums, nums) {
//   const fNLength = findNums.length;
//   const nLength = nums.length;
//   let outPut = [];
  
  
//   findNums.forEach(function(i,index){
//       const numIndex = nums.indexOf(i);
//       let foundAGreater=false;
//       for(var it=numIndex+1; it<=nLength; it++){
//           if(i<nums[it]){ outPut.push(nums[it]); foundAGreater=true; break;}
//       }
//       if(!foundAGreater){outPut.push(-1)}
//   });
  
//   return outPut;
// };