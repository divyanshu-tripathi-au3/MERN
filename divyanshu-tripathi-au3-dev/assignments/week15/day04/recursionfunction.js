// Given a number n write a recursive function to calculate the multiplication from 1-n

function factorial(n){
    if (n< 0) return 0;
    if(n<= 1) return 1;

    return n * factorial(n-1);
}

console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(0))