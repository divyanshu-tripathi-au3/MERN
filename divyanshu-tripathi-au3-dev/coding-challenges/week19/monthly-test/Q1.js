// 1)  Given a string, find the length of the longest substring which has no repeating characters.
//     Input: String="aabccbb"
//     Output: 3
//     Explanation: The longest substring without any repeating characters is "abc".
//     Input: String="abbbb"
//     Output: 2
//     Explanation: The longest substring without any repeating characters is "ab".
//     Input: String="abccde"
//     Output: 3
//     Explanation: Longest substrings without any repeating characters are "abc" & "cde".


const lengthOfLongestSubstring = function(s) {

    if (s === '') {
      return 0;
    }
  
    let result = 0;
    let start = 0;
    const len = s.length;

    for (let i = 0; i < len; i += 1) {
      const index = s.indexOf(s[i], start);
      
      if (index > -1 && index < i) {
        start = index + 1;
      }
  
      result = Math.max(result, index - start + 1);
      
    }
  
    return {length_Of_longest_substring_in_string: result};
    

  };

  

  console.log(lengthOfLongestSubstring("aabccbb"))
  console.log(lengthOfLongestSubstring("abbbb"))
  console.log(lengthOfLongestSubstring("abccde"))
  console.log(lengthOfLongestSubstring("abccdef"))