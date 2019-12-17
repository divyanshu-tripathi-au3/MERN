// 2 ^ 15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2 ^ 1000?

// (Read 2 ^ 15 as 2 raise to 15 or simply exponentiation with the base 2).

// function sumofpowerdigits(){

// }

function powersum(exp){
    let res = Math.pow(2,exp)
    let sum =0

    while (res){

        let rem = res % 10
        sum = sum + rem
        res = (res - rem) / 10
    }

    return sum
}

console.log(powersum(1000))
console.log(powersum(100))
console.log(powersum(99))