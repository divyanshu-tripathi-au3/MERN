
function quicksort(array) {
    if(array.length < 2) {
      return array;
    }
  
    var pivot = array[0];
    var lesser = [];
    var greater = [];
  
    for(var i = 1; i < array.length; i++) {
      if(array[i] < pivot) {
        lesser.push(array[i]);
      } else {
        greater.push(array[i]);
      }
    }
  
    return quicksort(lesser).concat(pivot, quicksort(greater));
  }
  

  console.log(quicksort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8].slice()));