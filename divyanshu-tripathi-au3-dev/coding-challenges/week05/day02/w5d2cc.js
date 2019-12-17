function formattime(totalSeconds){
    // var time = parseint(prompt("Please enter the time"));

        var hours = Math.floor(totalSeconds / 3600);
        var totalseondsnow = (totalSeconds % 3600);
        var minutes = Math.floor(totalseondsnow / 60);
       var seconds = totalseondsnow % 60;
       
       console.log(totalSeconds + " seconds = " + hours + " hour(s) : " + minutes + " minute(s) : " + seconds + " second(s)");
 
}

formattime(100);