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
  

app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));

// ========================================get===============================================




app.get("/students/add", function(req ,res){
   
    res.render("student.hbs", {
   
        title: "students",
        script: "/add.js"
    })

   
 });


app.post("/Students/student", function(req,res){
   
    db.collection("students").insertOne(req.body, function(error,result){
       
        if (error) throw error;
        console.log(req.body);
      
    });

        
});


app.get("/Studentsfulldata", function(req,res){
   
    db.collection("students").find({}).toArray(function(error,result){
       
        if (error) throw error;
        res.render("students.hbs", {
            student: result,
            title: "students"
           
           
        })   
    });

});


     
app.listen(3000);
   




