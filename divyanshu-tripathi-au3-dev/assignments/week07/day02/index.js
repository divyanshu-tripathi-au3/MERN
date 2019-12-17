var express = require('express');
var session = require('express-session');
var mongoclient = require("mongodb").MongoClient;

var url ='mongodb://localhost:27017';

var app = express();

app.use(session({
    secret: "Express session secret"
})
);

mongoclient.connect(url, function(err, client) {
    if (err) throw err;
    console.log("Database created!");
    db = client.db('userinfo');
  });
  


app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));




app.post("/auth", function(req,res){
    var flag =false;
    db.collection('userinfo').find({}).toArray(function(error,result){
       
        // console.log(result);
        // console.log(req.body.Email);
        // console.log(req.body.Password);
        

        for(var i = 0; i< result.length; i++){
            if (req.body.Email == result[i].Email && req.body.Password == result[i].Password)
                {
                    req.session.Name = result[i].Name;
                    req.session.loggedIn = true;
                    flag = true;
                }
        }

        res.redirect("/user");
       
    })
   
})

app.get("/user", function(req ,res){
    if ( req.session.loggedIn == true){
        res.sendfile("./assignment2.html");
    }
    else{
        res.redirect("/");
    }
});




app.post("/adduser", function(req ,res){
    db.collection("userinfo").insertOne(req.body);
    console.log(req.body);
    res.redirect("/user"); 
});


app.get("/logout", function(req ,res){
    req.session.destroy();
    res.redirect("/");
});

app.listen(7000);