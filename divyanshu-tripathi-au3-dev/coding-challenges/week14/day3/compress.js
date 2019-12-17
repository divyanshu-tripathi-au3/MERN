// Write a Javascript function that takes a string and compresses it as below.
// Input:  AAABCCDDDD
// Output: A3BC2D4.
// Input: AABBBCAAA
// Output: A2B3CA3
// You can use a simple character count algorithm for the compression. So for each character in the input string. 
// replace it with a number if the next character(s) are the same.


function compression(str){
    
        let output = '';
        let count = 0;
        for(let i = 0; i < str.length; i++) {
        count++;
        if(str[i] != str[i + 1]) {
            output += str[i] + count;
            count = 0;
        }
        }
        return output; 
    }

  console.log(compression("AAABCCDDDD"))
  console.log(compression("AABBBCAAA"))