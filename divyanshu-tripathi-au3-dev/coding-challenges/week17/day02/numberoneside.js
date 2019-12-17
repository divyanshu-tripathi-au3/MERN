// Given an array A[] consisting 0s, 1s and 2s. 
// The task is to write a function that sorts the given array. 
// The functions should put all 0s first, then all 1s and all 2s in last.
// Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
// Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}
// Time Complexity: O(n)

function swap(arr, i1, i2) {
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}
  
function sortarray(arr) {
    
    var low = 0;
    var mid = 0;
    var high = arr.length - 1;
    
  
    while (mid <= high) {
      if      (arr[mid] === 0) { swap(arr, low++, mid++); }
      else if (arr[mid] === 2) { swap(arr, mid, high--); }
      else if (arr[mid] === 1) { mid++; }
    }
    
    return arr;
    
  }
  
  console.log(sortarray([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1])); 