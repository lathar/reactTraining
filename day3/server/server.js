let express = require("express");
let cors = require("cors");
//let data = require("./data.json");
let fs = require("fs");

let app = express();
/*app.get("/", function(req,res) {
    //res.sendFile(__dirname+"/data.json")  //load the file
}) */
let data = {};
fs.readFile("./data.json", function(error, rdata){
    data = rdata+''
})
app.get("/data", function(req, res){
    res.send(data)
})
app.listen(5050, function(error){
    if (error) {
        console.log(error)
    } else {
        console.log("Localhost: 5050");
    }
})