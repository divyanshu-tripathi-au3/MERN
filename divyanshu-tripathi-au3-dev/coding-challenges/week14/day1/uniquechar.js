// Write a Javascript function that checks if a string contains all unique characters. Return true if all the characters are unique or false if it contains duplicate characters.
// For example, ansal contains two a and hence the function should return false for it. arkesh contains no repeated character and hence the function should return true.
// You can treat small case and big case of same characters as different characters.

function checkUniqChars(str){

    let map ={}
    for ( let i = 0; i < str.length; i++){
        const char = str[i];

        if(map[char] === undefined){
            map[char] =null
        }else{
            return false
        }
    }
    return true
}

console.log(checkUniqChars("ansal"))
console.log(checkUniqChars("arkesh"))

// function checkUniqChars (str) {
//     const chars = Array.from(str);
//     const orderedChars = chars.sort((a, b) => a.localeCompare(b));
//     const hasUniqChars = !orderedChars.some((ch, idx, chars) => chars[idx] === chars[idx + 1]);

//     if (hasUniqChars) {
//         console.log('all unique');
//     } else {
//         console.log('duplicates found.')
//     }
// }

// checkUniqChars('ansal how are you');



