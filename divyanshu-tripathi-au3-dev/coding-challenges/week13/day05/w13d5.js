// Consider the following rule for creating a number sequence -
// If the previous number is even, the next number is n / 2.
// If the previous number is odd, the next number is 3 * n + 1
// If we use the above rule and start the sequence from 13, we will have the following sequence 13, 40, 20, 10, 5, 16, 8, 4, 2, 1

function sequence(number){
    let out = [number]

    while (number != 1){
        switch(number % 2){
            case 0:
                number = number /2
                out.push(number)
                break;

            case 1:
                number = 3 * number + 1
                out.push(number)
                break;    
        }
    }

        return out
  
}
console.log(sequence(13))
console.log(sequence(11))