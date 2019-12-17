var city ="";
$.ajax({
    url :'https://raw.githubusercontent.com/attainu-nightingale/nightingale-course-module/master/coding-challenges/data/cities.json',
    datatype:'json',
    success: function(data){
        data = JSON.parse(data);
           city = data;

           $("#submit").on("click", search);

           function search(){
               $('#result').html('') 
               $('#result').append('<ul>');
               var n = $("#inputanswer").val().toUpperCase();
               for(i= 0; i< city.length; i++){
                   var j = city[i].name;
                    if(n == j.charAt(0)){
                       $("#result ul").append ('<li>' + j + '</li>');
                       console.log(j);
                    }
               }
           
           }

    }  

});

