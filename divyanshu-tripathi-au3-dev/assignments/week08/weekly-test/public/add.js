$("#btnsubmit").on("click", function(){
    var data ={
        Name : $("#Name").val(),
        Gender: $("#Gender").val(),
        Email: $("#Email").val(),
        Password: $("#Password").val()

    };


    $.ajax({
        type: "POST",
        url:"/Students/student",
        data: data,
        dataType: "json",
        success: function(data){
           
            console.log(data);
        }
    })

})


$(".newdelete").on("click", function(){
                
             
    var id = $(this).attr('value');
    console.log(id);

     $.ajax({
        url: "/deleteStudents/"+ id,
        type: "delete",
        contentType: "application/json",
        dataType: "json",
      
        success: function(data){
            id.hide()
            
        }
        
      })
      window.location.reload(true)
})