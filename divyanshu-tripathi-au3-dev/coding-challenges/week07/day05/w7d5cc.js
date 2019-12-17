
function decimaltobinary(num){
    var result =[],i;
    for(i = num; i>0; i= parseInt(i/2)){
      result.push(i%2);
        }
        console.log(result.reverse().join(""));
  }
  
  decimaltobinary(17)  


//   ======================================================


// function decimaltobinary(dividend){
//     var output ='';
//     var remainder
//     while(dividend > 1){
//         remainder = dividend % 2
//         output = remainder + output
//         dividend =  (dividend - remainder)/ 2
//     }
//     console.log(dividend + output)
// }

// decimaltobinary(17)