function factorial(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    console.log(num+"!= "+result) ;
}
    


factorial(0)
factorial(1)
factorial(4)
factorial(6)