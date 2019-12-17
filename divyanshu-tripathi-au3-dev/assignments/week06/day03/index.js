var express = require('express');
var session = require('express-session');


var app = express();

app.use(session({
    secret: "Express session secret"
})
);

app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));


var student = [
    {
        Name: "divyansh",
        Email: "divyansh@gmail.com",
        Password: "123456"
    },
   
    {
        Name: "attainu",
        Email: "attainu@gmail.com",
        Password: "67890"
    }

];

app.post("/login", function(req,res){
    for(var i = 0; i< student.length; i++){
        if (req.body.Email == student[i].Email && req.body.Password == student[i].Password){
            req.session.loggedIn = true;
            req.session.Name = student[i].Name;
        }
    }

    res.redirect("/user");

})


app.get("/user", function(req,res){
    if ( req.session.loggedIn == true){
        res.sendfile("./assignment2.html");
    }
    else{
       
        res.redirect("/");
    }
});

app.get("/logout", function(req ,res){
    req.session.destroy();
    res.redirect("/");
});

app.listen(3000);