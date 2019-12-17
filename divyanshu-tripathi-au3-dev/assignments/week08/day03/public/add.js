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


