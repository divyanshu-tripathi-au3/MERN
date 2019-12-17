// Write a Javascript function that finds all the number pairs in an array whose sum is equal to a given number.
// For example, if findPairs is our number, here are some sample calls -
// findPairs(10, [1, 2, 4, 5, 6, 10, 12]) will return [4, 6] as adding those two together produces 10.
// Remember, we are trying to find all pairs, which means set of two values.
// Start brute forcing it to find a N^2 solution. And then see if you can improve it further.

function twoSum(arr, S) {

    var sums = [];
  
     for (var i = 0; i < arr.length; i++) { 
       
      for (var j = i + 1; j < arr.length; j++) {
  
        if (arr[i] + arr[j] === S) {
             sums.push([arr[i], arr[j]]);
        }
  
      }
  
    }
     
      if (sums.length > 0){

        var setArray = new Set(sums.map(x => JSON.stringify(x)))
        var uniqArray = [...setArray].map(x => JSON.parse(x))
        return uniqArray;

      } else{
          return "target not found"
      }
  
  }
    


  console.log(twoSum([7, 3, 5, 2, -4, 8, 11,0], 7)); 
  console.log(twoSum([7, 3, 5, 2, -4, 8, 11,0], 27)); 
  console.log(twoSum([6 , 3, 5, 3, -4, 2, 4, 0], 6));
  console.log(twoSum([3,3,3,3], 6));
  console.log(twoSum([0,0,3,3,0], 0));
  console.log(twoSum([1,2,1], 3));