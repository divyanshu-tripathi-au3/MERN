
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var contactdata =[
    // Name : "name",
    // Phone: "phoneno"
];

app.get('/getallcontacts', function(req, res) {
    res.json(contactdata);
});



app.get('/contactform', function(req, res) {

    res.sendFile(__dirname + '/contactform.html');

});

// ======================== POST============================

app.use('/addcontactinfo', bodyParser.urlencoded({ extended: true }));

app.post('/addcontactinfo', function(req, res){
    contactdata.push(req.body);
    console.log(req.body);
 res.json(contactdata);

});

// =========================PUT==============================

app.put('/addcontactinfo/:Name', function(req, res){
    
    var index =-1;
    for(var i =0; i< contactdata.length; i++){
                       
        if (contactdata[i].Name.toLowerCase() == req.params.Name.toLowerCase()){
        index = i;
        }
    }

    if (index == -1){
        res.json({error: "Name does not exits"});
    }else {
        console.log(req.body.Phone);
        contactdata[index].Phone = req.body.Phone;
        res.json({"success":  contactdata[index].Phone + "" +  contactdata[index].Name + " is modified"});
    }
 });

// ================================= delete=====================

app.delete('/addcontactinfo/:Name', function(req, res){
   
    var index =-1;
    for(var i =0; i<contactdata.length; i++){
        if (contactdata[i].Name.toLowerCase() == req.params.Name.toLowerCase()){
            index = i;
         }
    }
    if (index == -1){
        res.json({error: "Name does not exits"});
    }else {
        var deletedata = contactdata[index].Name;
        contactdata.splice(index, 1);
        res.json({"success": deletedata + " is deleted"});
    }
 });


app.listen(3000);
  

