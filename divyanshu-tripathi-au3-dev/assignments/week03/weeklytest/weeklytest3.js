

    // var addbutton = document.getElementById("addbutton");
    // addbutton.addEventListener("click", plusoperation);

    // var minusbutton = document.getElementById("minusbutton");
    // minusbutton.addEventListener("click", minusoperation);

    // var multiplybutton = document.getElementById("multiplybutton");
    // multiplybutton.addEventListener("click", multioperation);

    // var divbutton = document.getElementById("divbutton");
    // divbutton.addEventListener("click", divoperation);

    // var clearbutton = document.getElementById("clearbutton");
    // clearbutton.addEventListener("click", clroperation);

    

    
    
    // function valuefind (){
    //     var number1 = document.getElementById("number1").value;
    //     var number2 = document.getElementById("number2").value;
    //     resultobject = {
    //         "number1": number1,
    //         "number2": number2
    //     }
    //         return resultobject;
    // }


    
    // function plusoperation(){
                   
    //     numbervalue =valuefind ();
    //     var numresult = document.getElementById("Results");

    //     numresult.innerText = parseFloat(numbervalue.number1) + parseFloat(numbervalue.number2);
        
        
        
    // }
    
    
    function plusoperation(){
        
        var number1 = document.getElementById("number1");
        var number2 = document.getElementById("number2"); 
         document.getElementById("Results").value = "";
         var res= parseFloat(number1.value) + parseFloat(number2.value);
        document.getElementById("Results").value =res;
                
                
    }


    function minusoperation(){
        var number1 = document.getElementById("number1");
        var number2 = document.getElementById("number2"); 
         document.getElementById("Results").value = "";
         var res= parseFloat(number1.value) - parseFloat(number2.value);
        document.getElementById("Results").value =res;
                
        
    }


    function multioperation(){
    
        var number1 = document.getElementById("number1");
        var number2 = document.getElementById("number2"); 
         document.getElementById("Results").value = "";
         var res= parseFloat(number1.value) * parseFloat(number2.value);
        document.getElementById("Results").value =res;
                
    }


    function divoperation(){
    
        var number1 = document.getElementById("number1");
        var number2 = document.getElementById("number2"); 
         document.getElementById("Results").value = "";
         var res= parseFloat(number1.value) / parseFloat(number2.value);
        document.getElementById("Results").value =res;
                
    }


    // function clroperation(){
    
    //    var number1 = document.getElementById("number1");
    //     var number2 = document.getElementById("number2");
    //     var  numresult = document.getElementById("Results");
               
    //     number1.value ="";
    //     number2.value ="";
    //     numresult.value ="";
        
        
    // }
    