// Write a Javascript function that finds the missing numbers in an array of integers from 1 to N, where N being the largest number in the array.

// Some example inputs and outputs -

// findMissing( [1, 2, 4, 5, 6] ) should return [3] as 3 is the missing number in the series. findMissing( [1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 14, 15] ) should return [8, 10] as both of them are missing the series.

// You can assume that the input array does not contain any duplicates.


function missingnumber(intArray){																																						
    let arrayLength = Math.max.apply(Math, intArray);
    let missing = []
    
    for ( let i = 1; i < arrayLength; i++ ) {
        if ( intArray.indexOf(i) < 0 ) {
            missing.push( i );
        }
    }
    return missing;																															                                     
  }  

   console.log(missingnumber([1, 2, 4, 5, 6]))
   console.log(missingnumber([0, 2, 4, 5, 6]))
   console.log(missingnumber([1, 2, 3, 4, 5, 6, 7, 14, 15]))