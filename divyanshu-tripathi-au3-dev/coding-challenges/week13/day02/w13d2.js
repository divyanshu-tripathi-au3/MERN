// Given a 32-bit signed integer, reverse digits of an integer.
// Example 1:
// Input: 123 Output: 321
// Example 2:
// Input: -123 Output: -321
// Example 3:
// Input: 120 Output: 21

function reverse(num){
    let out = 0
    let sign = Math.sign(num)
    num = sign*num
    while (num!= 0){
        let lastdigit = num%10
        out = (out * 10) + lastdigit
        num =Math.floor(num/10)
    }
    return out*sign
}

console.log(reverse(-321))
console.log(reverse(102))
console.log(reverse(321))

