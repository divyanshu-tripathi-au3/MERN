function urlparameter(url){
    var params = "";
    var paramsobj = {};

// ===================== check condition on basis of ? and &==========

    for (var i =0; i< url.length; i++ ){
        var index;
        if (url[i] == "?"){
            index =i;

        }else if(index < url.length){
            params += url[index+1];
            index = index +1;

        }
    }

    var newparams = params.split("&");
    console.log(newparams);
}


// ======= converting array to object======

// for (vari=0; i <newparams.length; i++){
//     paramsobj[newparams[i]] = 
// }


urlparameter("http://localhost:3000/add?num1=5&num2=3")