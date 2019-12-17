// Consider two sorted arrays, A and B.
// Write a Javascript function that merges these two arrays maintaining the sorted order.
// We know that this can be easily achieved using .concat() and then .sort() methods. However, for this problem, you cannot use the .sort() function. 
// Try to do the merge without it.

// function mergeLists(firstList, secondList) {
//     return [...firstList, ...secondList].sort();
//   }
//   console.log(mergeLists([4,5,6], [1,2,3]))


  function mergeLists(arr1,arr2){
      let output =[]

      while (arr1.length && arr2.length){
          let minimum

          if (arr1[0] < arr2[0])
            minimum = arr1.shift()
          else
          minimum = arr2.shift()

          output.push(minimum)
      }

      if (arr1.length) output = output.concat(arr1)
      if (arr2.length) output = output.concat(arr2)

      return output

  }

  console.log(mergeLists([4,5,6], [1,2,3]))