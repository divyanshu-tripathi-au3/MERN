// A Duck number is a number which has zeroes present in it, 
// but there should be no zero present in the beginning of the number. 
// For example 3210, 8050896, 70709 are all duck numbers whereas 02364, 03401 are not.
// The task is to check whether the given number is a duck number or not.

const duck = (str) =>{
    if (str[0] ==='0') return false

    let num  = parseInt(str)

    while(num){
        let rem = num % 10
        if (rem === 0 ) return true
        num = (num - rem)/ 10
    }

    for( let i = 1; i <str.length; i++){
        const digit = str[i];

        if (digit === '0') return true
    }
    return false

}

console.log(duck('0101'))
console.log(duck('3210'))
console.log(duck('02364'))
console.log(duck('03401'))
console.log(duck('236400'))
console.log(duck('003401'))