

function binarySearch(arr, value ){
    var mid, left, right; 
    left = 0; 
    right = arr.length-1;
    
    while(left<=right){
      mid = parseInt((left+right)/2); 
      if(value === arr[mid]){
        return "Found";
      }
      else if(value < arr[mid]){
        right = mid-1; 
      }
      else {
        left = mid+1;
      }
    }
    return "Not found"; 
  }
  

  console.log(binarySearch([2,3,5,7,9,12,17,20], 12))
  console.log(binarySearch([2,3,5,7,9,12,17,20], 22))