
window.onload=function(){
    var element = document.querySelector('.events');
    element.addEventListener("mouseover", myFunction);
    element.addEventListener("mouseout", mysecondFunction);
    }
    
    function myFunction() {
      document.body.style.backgroundColor = "pink";
    }
    
    
    
    function mysecondFunction() {
      document.body.style.backgroundColor = "white";
        }