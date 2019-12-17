// Given two binary strings, return their sum (also a binary string).
// Input:  a = "11", b = "1"
// Output: "100"

function addTwoBinaries(a,b) {

  let carry = 0;
  let result = "";
  
  let i = 0;
  let j = 0;
 
  while(i<=a.length - 1 || j <=b.length-1) {
   
    let num1 = i < 0 ? 0 : a[i] | 0;
    let num2 = j < 0 ? 0 : b[j] | 0;
    carry += num1 + num2; 
    result = carry % 2 + result; 
    carry = carry / 2 | 0; 
    i++;
    j++;
  }

  if(carry) {
    result = carry + result;
  }
  return result;
}

console.log(addTwoBinaries("11", "1"));
console.log(addTwoBinaries("1101", "1001"));

