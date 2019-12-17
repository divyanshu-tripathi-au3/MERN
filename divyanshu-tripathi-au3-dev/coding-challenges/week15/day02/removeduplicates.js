// Write a Javascript program that removes duplicates from an array.
// For example, if the input array is [1, 2, 2, 3, 4, 5, 6, 6, 7], the output of the program should be [1, 2, 3, 4, 5, 6, 7]
// You can assume that the input array is sorted. (If this fact is not mentioned in your interview challenge, you can always sort the input array before processing).
// Can you do this in O(n) time?

function getUnique(array){
    var uniqueArray = [];
    
    
    for(var value of array){
        if(uniqueArray.indexOf(value) === -1){
            uniqueArray.push(value);
        }
    }
    return uniqueArray;
}



console.log(getUnique(["divy", "gopi", "Suraj", "Suraj", "Ansal", "Ansal"])); 
console.log(getUnique(["1","2","3","3","4","4","5"])); 