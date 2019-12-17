var express = require('express');
var session = require('express-session');
var exphbs = require('express-handlebars');
var app = express();
var fs = require('fs');
var userdata = require('./userdata.json')
var tweetdata = require('./tweetdata.json')

app.engine("hbs", exphbs({defaultLayout: "main", extname: "hbs"}));
app.set("view engine", "hbs");

app.use(session({
    secret: "Express session secret"
})
);

app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));



// =================== login route ==================

app.post("/login", function(req,res){

    // var userdata = __dirname + '/userdata.json';
    // fs.readFile(userdata, 'utf-8', function(error, data){
    //     if (error)
    //         throw error;
    // })

    console.log(userdata);
    for(var i = 0; i< userdata.length; i++){
        if (req.body.Username == userdata[i].Username && req.body.Password == userdata[i].Password){
            req.session.loggedIn = true;
            req.session.Username = userdata[i].Username;
        }
    }

    res.redirect("/user");

})



// ============== sending tweet page============

app.get("/user", function(req,res){
    if ( req.session.loggedIn == true){
        // res.sendfile("./tweet.html");
      
    res.render("tweets", {
        data: tweetdata,
        title: "Tweets"
    });
 
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