function initial(){
    name = prompt("What is your name?");
  
    if(name != null && isNaN(name) & name != ""){
  	    console.log("Hello ", name);
    }else{
      alert("Invalid name, please try again")
      initial();
    }

  var shortname = name.split(' ')
  var initials = ''
  for (var i = 0; i < shortname.length; i++) {
    if (shortname[i].length > 0 && shortname[i] !== '') {
      initials += shortname[i][0]
    }
  }
  var initials1= initials.toUpperCase();
  console.log(initials1)

}

initial();

