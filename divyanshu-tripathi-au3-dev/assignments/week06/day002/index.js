var express = require('express');
 var exphbs = require('express-handlebars');
var app = express();


app.engine("hbs", exphbs({defaultLayout: "main", extname: "hbs"}));
app.set("view engine", "hbs");

var me = {
    firstname: "Divaynshu",
    lastname: "Tripathi",
    bio: "Hi I am Divyanshu. I belongs to Kanpur.",
    movies: [
        "Avengers: Endgame",
        "Avengers: Infinity War",
        "Thor: Ragnarok",
        "Doctor Strange",
        "Iron Man"
    ]
};

app.get("/", function(req, res){
    res.render("about", {
        data: me,
        title: "about me"
    });

});

app.listen(3000, function(){
    console.log("listening to port 3000");
});