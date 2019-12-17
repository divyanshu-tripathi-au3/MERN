// The count-and-say sequence is the sequence of integers with the first five terms as following:
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.
// Example 1:
// Input: 1
// Output: "1"
// Example 2:
// Input: 4
// Output: "1211"



function countthensay(digit){

    if(digit < 1 || digit > 30){
        return "please provide integer in range 1 to 30"
    }

    let current = "1"

    for(let k =2; k <= digit; k++){

        let next = ""

        for ( let i = 0; i < current.length;){
            let count = 1

            while(current[i] == current[i + count]) count++

            next += count +  current[i]

            i= i + count
        }

        current = next
    }
    return current
}

console.log(countthensay(1))
console.log(countthensay(4))









// =================  again try========================
// function countthensay(digits){
//     var result ='';
//     var char =(digits + '').split('');
//     var firstelement= char[0];
//     var freq =0;



//     for (var i = 0; i < char.legth; i++){
//         if (firstelement == char[i]){
//             feq++;

//         }
//         else{
//             result += freq + firstelement;
//             firstelement = char[i];
//             freq= 1
//         }
//     }
//         return result;
    
// }

    // (function output(seed, iteration){
    //     for (var i =0; i < iteration; i++){
    //         console.log(seed);
    //         seed = countthensay(seed);
    //     }
    // })("4", 10)



