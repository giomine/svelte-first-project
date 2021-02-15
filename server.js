const express = require("express");
const path = require("path");

const app = express();
app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.get("/jp", function(req, res){
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.get("/jp/jp", function(req, res){
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.get("/jp/jp/jp", function(req, res){
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(process.env.port || 3000, function(){
    console.log("Server is running on port 3000");
})