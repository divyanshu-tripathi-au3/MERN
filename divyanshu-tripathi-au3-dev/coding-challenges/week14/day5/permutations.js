// Write a Javascript function that finds all permutations of an input string.

// Permutation is the act of arranging the members of a collection into some sequence or order - https://en.wikipedia.org/wiki/Permutation

// For example, the input "ABC" to our function would return the following: "ABC", "ACB", "BAC", "BCA", "CBA", and "CAB".

// These kind of problems are well suited for Recursive problem solving.


function heapAlgo(k,A){

    if (k == 1){
       
        console.log(A)
        return 0
    }

    let out = []

    for(let i= 0; i < k; i++){

        heapAlgo(k-1, A)
        if (i < k-1)
        k % 2 ? [A[0], A[k-1]] = [A[k-1],A[0]] : [A[i], A[k-1]] = [A[k-1],A[i]] ;
    }

}


// ==================================== for complete string =====================================

// function heapAlgo(k,A){

//     if (k == 1){
//         return A.join('')
       
//     }

//     let out = []

//     for(let i= 0; i < k; i++){

//         let f=  heapAlgo(k-1, A)
//         out = out.concat(f)
        
//         if (i < k-1)
//         k % 2 ? [A[0], A[k-1]] = [A[k-1],A[0]] : [A[i], A[k-1]] = [A[k-1],A[i]] ;
//     }

//     return out
// }




console.log(heapAlgo(3,['a','b','c']))
console.log(heapAlgo(4,['a','b','c','d']))