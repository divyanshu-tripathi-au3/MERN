$('.deletestu').on("click", function () {
    var id = $(this).attr('value');
    
    $.ajax({
        type: "delete",
        url: "/students/delete/" + id,
        data: id,
        dataType: "json",
        success: function (data) {
            console.log(data);
            //id.hide();
        }
    })
    window.location.reload;

})