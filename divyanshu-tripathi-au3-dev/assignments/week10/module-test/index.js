var express = require('express');
var exphbs = require('express-handlebars');
var mongoclient = require("mongodb").MongoClient;
var session = require('express-session');

var url ='mongodb://localhost:27017';
var app = express();

app.use(session({
    secret: "Express session secret"
})
);

app.engine("hbs", exphbs({defaultLayout: "main", extname: "hbs"}));
app.set("view engine", "hbs");


mongoclient.connect(url, function(err, client) {
    if (err) throw err;
    console.log("Database created!");
    db = client.db('userinfo');
  });
  

app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));

// ========================================get===============================================


app.get("/user/add", function(req ,res){
   
    res.render("student.hbs", {
   
        title: "User",
        script: "/add.js"
       
    })

       
 });


app.post("/adduser", function(req,res){
   
    db.collection("students").insertOne(req.body, function(error,result){
       
        if (error) throw error;
        console.log(req.body);
      
    });
   
    res.redirect("/user/add");

});

app.get("/userloginpage", function(req,res){
   
    res.render("login.hbs", {
   
        title: "Loginpage"
       
    })

});


app.post("/auth", function(req,res){
    var flag =false;
    db.collection('students').find({}).toArray(function(error,result){
             
        for(var i = 0; i< result.length; i++){
            if (req.body.Email == result[i].Email && req.body.Password == result[i].Password)
           
                {
                   
                    req.session.loggedIn = true;
                    flag = true;
                }
        }

        if ( flag == false){
            res.redirect("/userloginpage");
        }
       
        console.log(flag)
        res.redirect("/userpage");
    })
             
})

app.get("/userpage", function(req ,res){
    if ( req.session.loggedIn == true){
        res.render("profile.hbs", {
   
            title: "profile"
           
        })
    }
    else{
        res.redirect("/userpage");
    }
});


     
app.listen(3000);
   




