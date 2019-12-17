function stars(rows){
    var str = '';
    for(var i=1; i<=rows; i++){
        for(var k=1; k<=rows-i; k++){
            str += " ";
        }
        for(var j=1; j<=i; j++){
            str += "*  ";
        }
        console.log(str);
        str = "";
    }
}
stars(7);



// ====================================================

// function stars(n){
//     var str =''
//     for(var row =n; row >=1 ; row -- ){
//         for (var column =1; column <=n; column ++){
//             if (column <= row -1)
//                 str = str + ' '
//             else
//                 str = str +'* '    

//         }

//         str = str +'\n'
//     }
//     console.log(str)
// }

// stars(5)