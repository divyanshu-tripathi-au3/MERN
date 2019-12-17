
function frequency(array){
    result = { };
    for(var i = 0; i < array.length; ++i) {
        if(!result[array[i]])
            result[array[i]] = 0;
        (++result[array[i]]);
    }
  console.log(result)
}

frequency(["Ansal", "Vaibhav", "Divyam", "Vaibhav", "Dwarak"])
 
frequency([2, 3, 2, 4, 3, 5, 3])   