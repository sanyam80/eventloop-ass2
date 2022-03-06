const express = require("express");
const app = express();
app.get("/users",function(req,res){
    res.send("hello");
});
app.get("/books",function(req,res){
    res.send({peter:"legend"})
});
app.listen(5500,function(){
    console.log("listening on port 5500")
});