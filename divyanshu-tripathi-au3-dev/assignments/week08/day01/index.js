var express = require('express');
var exphbs = require('express-handlebars');
var mongoclient = require("mongodb").MongoClient;

var url ='mongodb://localhost:27017';
var app = express();

app.engine("hbs", exphbs({defaultLayout: "main", extname: "hbs"}));
app.set("view engine", "hbs");


mongoclient.connect(url, function(err, client) {
    if (err) throw err;
    console.log("Database created!");
    db = client.db('userinfo');
  });
  

// ========================================get===============================================


app.get("/Students", function(req,res){
   
    db.collection("students").find({}).toArray(function(error,result){
       
        if (error) throw error;
        res.render("students.hbs", {
            student: result,
            title: "students"
        })   
    });

});


app.get("/instructor", function(req,res){
   
    db.collection("Instructor").find({}).toArray(function(error,result){
       
        if (error) throw error;
        res.render("instructor.hbs", {
            instructor: result,
            title: "instructors"
        })   
    });

});
     
app.listen(3000);
   




