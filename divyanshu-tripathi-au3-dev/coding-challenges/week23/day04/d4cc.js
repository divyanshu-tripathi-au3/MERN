
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
// You can guarantee that input is non-negative.

var Bits = function(integer) {
    
    const base = (integer).toString(2).split('');   
   
    const result = base.reduce((sum, num) => sum + Number(num), 0);
    
    return result;
 };

 console.log(Bits(1234))
 console.log(Bits(123))