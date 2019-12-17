
function isEqual(arr1,arr2) 
{ 
 var a = arr1; 
 var b = arr2; 
 var found = true;
 var post = ""
 var num =0
  
  if(a.length!=b.length) 
   console.log(" Both array are not the same");
  else
  { 
  
   for(var i=0;i<a.length;i++) 
   if(a[i]!=b[i]) {
    
    found =false;
     num= num +1
       if (num > 1) {
          var post =  post + " & "+ (i+1)
       } else{
                var post =  post + (i+1)
             }
    }

      if (!found){
      console.log("Second array is Not same at "+ post +" position of the array");
      }   


      if (found){
          console.log(" Both are the Same array")
      }

  } 
} 


isEqual([1,2,3],[1,2,3])


