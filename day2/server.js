let express= require ("express"); // returns a function
let app = express(); // returns a object
/**
 * Middle ware
 */
app.use(express.static(__dirname));

app.get("/", function(request, response){
    //response.send("Hello ...")
    response.sendFile(__dirname+"/step1-modules.html")
})
app.listen(3030);
console.log("server listen in port 3030")
