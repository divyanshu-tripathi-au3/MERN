var state ="";

$.ajax({
    url :'https://raw.githubusercontent.com/attainu-nightingale/nightingale-course-module/master/coding-challenges/data/cities.json',
    datatype:'json',
    success: function(data){
        data = JSON.parse(data);
           state = data;
          
           $("#submit").on("click", search);

           function search(){
               $('#result').html('') 
               $('#result').append('<ul>');
               var n = $("#inputanswer").val().toLowerCase();
              //  console.log(n);
               for(i= 0; i< state.length; i++){
                   var j = state[i].state.toLowerCase();
                  //  console.log(j)
                 if(n == j){  
                 
                   var city = state[i].name;
                    // console.log(city);
                       $("#result ul").append ('<li>' + city + '</li>');
                     
                    
                 }    
               }
           
           }

    }  

});

