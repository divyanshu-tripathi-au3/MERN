var express = require('express');
var exphbs = require('express-handlebars');
var mongoclient = require("mongodb").MongoClient;

var ObjectId = require('mongodb').ObjectId

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

app.get("/students", function (req, res) {
    db.collection("students").find().toArray(function (err, result) {
        if (err) throw err;
        res.render("students", { data: result, title: "Students", students: "active", script: "/deletestu.js" });
        //console.log(result);
    });
});

app.get("/instructors", function (req, res) {
    db.collection("instructors").find().toArray(function (err, result) {
        if (err) throw err;
        res.render("instructors", { data: result, title: "Instructors", instructors: "active" });
    });
});

app.get("/students/add", function (req, res) {
    res.render("addStudent", { title: "Add Students", addNavLink: "active", script: "/add.js" })
});

app.post("/students/student", function (req, res) {
    db.collection("students").insertOne(req.body, function (err, result) {
        if (err) throw err;
        console.log(req.body);
    })
})



app.delete("/students/delete/:id", function (req, res) {
    db.collection('students').deleteOne({ '_id': ObjectId(req.params.id) }, function (err, success) {

        if (err) throw err;
        else
            res.redirect("/students");


    })
});

app.put("/students/add", function (req, res) {
    var myobj = { $set: { _id: require("mongodb").ObjectID(req.body.id), languagesKnown: req.body.remove } }
    db.collection("students").updateOne({ languagesKnown: req.body.add }, myobj, function (err, result) {
        if (err) throw err;
        console.log("updated")
    });
});


app.listen(8800, function () {
    console.log("listening on 8800");
});



