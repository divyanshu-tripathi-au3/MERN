function palindrome(str) {

    var strlength = str.length;
    var mid = Math.floor(strlength/2);

    var foundsame =true;

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[strlength - 1 - i]) {
            foundsame =false ;
        }
    }

    if (!foundsame){
    console.log("String is not a palindrome");
  }   

  if (foundsame){
      console.log("String is palindrome");
  }
    
}

palindrome("malayalam")