function isEqual(string1, string2) 
{ 
    var a = string1.toString();
     var b = string2.toString(); 
     var found = true;
     var post = ""
     var num =0
      
      if(a.length!=b.length) 
       console.log(" Both strings are not the same");
      else
      { 
      
       for(var i=0;i<a.length;i++) 
       if(a[i].toLowerCase()!=b[i].toLowerCase()) {
        
        found =false;
         num= num +1
           if (num > 1) {
              var post =  post + " & "+ (i+1)
           } else{
                    var post =  post + (i+1)
                 }
        }
    
          if (!found){
          console.log("Second string is Not same at "+ post +" position of the String");
          console.log("the hamming distance is "+ (num))
          }   
    
    
          if (found){
              console.log(" Both are the Same String")
          }
    
      } 
    } 
    
    
    isEqual(1010101,1010011)
    isEqual("RAJA","raju")