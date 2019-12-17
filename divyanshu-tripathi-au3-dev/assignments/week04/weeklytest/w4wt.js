


$.ajax({
  url :'https://raw.githubusercontent.com/attainu-nightingale/nightingale-course-module/master/assignments/data/books.json',
  datatype:'json',
  success: function(data){
      
      var data = JSON.parse(data);
      console.log(data);

         $("#submit").on("click", function(){
                 
                 
                 var n = $("#Language").val().toLowerCase();
                 
                   $('#library').empty();

                 for(i= 0; i< data.length; i++){ 

                                                   
                 var j = data[i].language.toLowerCase();
                 if(n == j){
                     
                     var library_data = '';
                                                         
                       library_data += '<tr>';
                       library_data +='<td>' + data[i].title + '</td>' ;
                       library_data += '<td>' + data[i].author + '</td>' ;
                       library_data += '<td>' + data[i].country + '</td>' ;
                       library_data +='<td>' + data[i].language + '</td>' ;
                    
                       library_data += '<td>' + data[i].pages + '</td>' ;
                       library_data += '<td>' + data[i].year + '</td>' ;
                       library_data += '</tr>';

                       
                      
                       $('#library').append(library_data);

                 }
             }

                 

             })

  }        
       
  
});