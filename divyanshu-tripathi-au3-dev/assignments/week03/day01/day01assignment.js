

function table() {
    var x = prompt("Enter a Value");
    var num1 = parseInt(x);
    
    var i;
    for (i=1; i<=10; i=i+1){
       console.log( num1 + '*' + i + '=' + (num1*i));
    }

}
table();