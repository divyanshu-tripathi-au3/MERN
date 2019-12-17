function findmissingchar(userstring){
  
    var start ='a'
    var end ='z'
    var final =''

    var startcode = start.charCodeAt()
    var endcode =     end.charCodeAt()

    for ( var i = startcode; i <= endcode; i++ ){

          var char = String.fromCharCode(i)
            if(userstring.indexOf(char) == -1){
                final = final + char
                
            }
          
    }

  console.log(final)

}


findmissingchar("The quick brown fox jumps")
findmissingchar("how are you")
