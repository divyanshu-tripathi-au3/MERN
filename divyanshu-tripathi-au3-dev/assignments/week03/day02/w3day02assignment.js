
function inputsearch(){
    var inputArray = [];
    var size = 5;
    for(var i=0; i<size; i++) {
        inputArray[i] = parseInt(prompt('Enter Element ' + (i+1)));
    }

    console.log(inputArray);

    var x = parseInt(prompt("Enter a Value "));

    console.log("the value which you have provided is "+ x);
    
    var found = false;
    for(var j=0; j<inputArray.length; j++) {
        if (inputArray[j]==x) 
         {
             console.log("the position is " +j);
             found = true;
         }   
             
    }
    
    if (! found){
        console.log("sorry value not found so return " + -1)
    }
           
}

inputsearch();

