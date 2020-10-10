const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000;


app.get("/",function(req,res){
    res.sendFile(`${__dirname}/signup.html`)
})

app.post("/",function(req,res){
    var firstname = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;
    
})


app.listen(port,function(){
    console.log(`Server Is Running on ${port}`)
});


