function PowersofTwo(num) {
    var result = num / 2;
     console.log(result);
    if (result < 2) {
        console.log(false) ;
    } else if (result == 2) {
        console.log(true);
    } else {
        PowersofTwo(result);
    }
}
PowersofTwo(24);