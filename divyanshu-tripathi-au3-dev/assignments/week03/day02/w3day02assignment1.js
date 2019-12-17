function searchinput(){
    var a = prompt("enter the values of array");
    var array =a.split("");
    var b= prompt("enter your value");
    for(var i=0; i<array.length; i++){
        if(array[i]==b){
            return i;
        }
    }

    return -1

}
searchinput();