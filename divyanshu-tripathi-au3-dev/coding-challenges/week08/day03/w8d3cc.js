function largestinarray(arr){

    var largest = arr[0];
  
      for (var i = 0; i < arr.length; i++) {
          if (largest < arr[i] ) {
              largest = arr[i];
          }
      }
      console.log(largest);
  
  }
  
  largestinarray([ 50, 40, 30, 20, 10])
  largestinarray([156, 32, 5, 89, 35])

// -------------------------------- JS Inbuilt Function---------------------------------


// function largestOfFour(array) {
//     console.log(Math.max.apply(null, array)) ;
// }

// largestOfFour([3, 6, 2, 56, 32, 5, 89, 32])


// --------------------------------------------------------------------------------------------------


// var arr = ['20','120','111','215','54','78'];

// arr.sort(function(a,b){
//     return b-a;
// });

// console.log(arr[1]);


// -------------------------------------- largest among subarrays --------------------------------


// function largestamongsubarrays(arr) {
//     var largestNumber = [0,0,0,0];
//     for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
//      for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
//         if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
//            largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
//          }
//      }
//   }
//   console.log(largestNumber) ;
//  }
//  largestamongsubarrays([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



  
//   ===================================Lowest number in array ==========================================

function lowestinarray(arr){

    var lowest = arr[0];
  
      for (var i = 0; i < arr.length; i++) {
          if (lowest > arr[i] ) {
              lowest = arr[i];
          }
      }
      console.log(lowest);
  
  }
  
  lowestinarray([3, 6, 2, 56, 32, 5, 89, 32,0])
  lowestinarray([3, 6, 156, 32, 5, 89, 32])


//   --------------------------------------------------------------

// function lowestOfFour(array) {
//     console.log(Math.min.apply(null, array)) ;
// }

// lowestOfFour([3, 6, 2, 56, 32, 5, 89, 32])
