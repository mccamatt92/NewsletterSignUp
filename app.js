const express = require("express");
const bodyParser = require("body-parser");
const https = require("https")
const request = require("request");


const api = {
    key: "Insertkeyhere",
    url: `https://us2.api.mailchimp.com/3.0/lists/bddfe0d70e`
}


const app = express();


const options ={
    method:"POST",
    auth:`matthias:${api.key}`

}



app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000;


app.get("/",function(req,res){
    res.sendFile(`${__dirname}/signup.html`)
})

app.post("/",function(req,res){
    const firstname = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;

    var data = {
        members: [
            {
            email_address:email,
            status:"subscribed",
            merge_fields:{
                FNAME:firstname,
                LNAME:lastName
            }
        }
        ]
    };

    var jsonData = JSON.stringify(data);


  const request =  https.request(api.url,options,function(respone)
    {
        respone.on("data",function(data)
        {
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
request.end();
})




app.listen(port,function(){
    console.log(`Server Is Running on ${port}`)
});


