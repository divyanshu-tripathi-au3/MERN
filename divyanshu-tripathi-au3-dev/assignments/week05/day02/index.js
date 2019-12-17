// var num1,num2;


var express = require('express');
var app = express();

// ============ middle ware ===========================

// here create a assets folder to store files like css n images  via middleware
// app.use(express.static(__dirname + '/assets'));

// now for perticulat page if you wanna use css or image then 
// app.use('/contactpage', express.static(__dirname + '/assets'));

// app.use(function (req, res, next){
//     console.log("this will print for everyone before executing of res.send for each route");
//     next();

// });
// for middleware next(); will always come at the end of that middleware which were created by us 

// res.json();
// res.sendfile();
// ====================================================


app.get('/add', function (req, res) {
  res.json( {sum: parseInt(req.query.num1) + parseInt(req.query.num2) });

});

app.get('/sub', function (req, res) {
    res.json({ div: parseInt(req.query.num1) - parseInt(req.query.num2) });

});

app.get('/multi', function (req, res) {
    res.json({ multi: parseInt(req.query.num1) * parseInt(req.query.num2)});

});

app.get('/div/:num1/:num2', function (req, res) {
    res.json({ div: parseInt(req.params.num1) / parseInt(req.params.num2)} ) ;

});


app.listen(3000);
  

