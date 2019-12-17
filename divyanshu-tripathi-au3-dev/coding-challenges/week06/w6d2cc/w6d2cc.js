
// =========== to sort a string===============================
function sortString(str){
    var arr = str.split('');
    var tmp;
    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
       
        if(arr[i] > arr[j]){
          tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }
    arr = arr.join('');
    var arr1 =arr.trim();

    console.log(arr1);
  }

//  sortString("binary")
//  sortString("biyr an")

// ================= to check anagram =======================

function checkanagram(string1,string2)
{

 string1 =string1.toLowerCase();
 string2 =string2.toLowerCase();
  
 var str1char = string1.split('').sort().join(''); 
 var str2char = string2.split('').sort().join(''); 

 var str1trim = str1char.trim();
 var str2trim = str2char.trim();
  
  var found = true;
   
  if(str1trim.length!=str2trim.length){
   console.log(" Both strings are not the same");
        found = false;
  }

  for(var i=0;i<str1trim.length;i++) {
    if(str1trim[i]!=str2trim[i]) {
            found =false;
        }
  }
                
  if (!found){
    console.log("Strings are not anagram");
  }   

  if (found){
      console.log("String are anagram");
  }
  
}


checkanagram("Mother In Law", "Hitler Woman")
checkanagram("Keep", " peek ")




