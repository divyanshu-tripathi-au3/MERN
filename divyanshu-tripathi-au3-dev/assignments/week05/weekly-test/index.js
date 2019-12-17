var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));

var tweets = [
    {
        Name: "digitizer",
        tweet: "This is a cool piece of information."
    }
]

app.get('/', function(req, res) {

    res.sendFile(__dirname + '/public/tweet.html');

});

app.get('/alltweetsinfo', function(req, res) {
    res.json(tweets);
});


// ======================== POST============================

app.use('/alltweets', bodyParser.urlencoded({ extended: true }));

app.post('/alltweets', function(req, res){
    console.log(req.body);
    tweets.push(req.body);
   res.redirect("/tweet.html");
});


app.listen(3000);