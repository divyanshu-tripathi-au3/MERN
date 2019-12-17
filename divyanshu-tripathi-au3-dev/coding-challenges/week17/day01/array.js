// Given an array of n distinct elements, the task is to find all elements in array
//  which have at-least two greater elements than themselves.
// Input: [2, 8, 7, 1, 5]
// Output: 2 , 1,  5
// Solve the above question in O(n) time.


function atleasttwogreater(array){
    let max = -Infinity
    let secondmax = -Infinity

    for (let i =0; i < array.length; i++){
        const element = array[i];

        if(element > max){
            secondmax = max 
            max = element
        }else if (element > secondmax){
            secondmax = element
        }
    }


    return array.filter(item => item < secondmax)
}

console.log(atleasttwogreater([2, 8, 7, 1, 5]))