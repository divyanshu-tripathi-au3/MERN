var answer;

 $.ajax({
    url :'https://raw.githubusercontent.com/attainu-nightingale/nightingale-course-module/master/assignments/data/quiz.json',
    datatype:'json',
    success: function(data){
        
        var data = JSON.parse(data);
        var index = Math.floor(Math.random() * data.length);
        $("#question").html(data[index].question);
        answer = data[index].answer.toLowerCase();
    }  

});


function tocheckanswer() {
    var useranser = $("#inputanswer").val().toLowerCase();  
    console.log(useranser);
      if (
          useranser == answer
      ){
          alert("Correct answer! Plesae proceed with next question");
         clearInterval(interval);
      }else{
          alert("wrong answer! Try again with in given time limit");
      }
  }
  



$("#submit").on("click", tocheckanswer);

 var counter = 30;
 var interval = setInterval(function(){
    counter--;
    if (counter>= 0){
        $("#timer").html(counter);
    }


    if (counter === 0){
        alert("time is over!");
        $("#submit").attr("disabled", true);
        clearInterval(interval);
    }
 },1000);

 
 $("#nextbutton").on("click", nextques);

 function nextques(){
     location.reload();
 }


