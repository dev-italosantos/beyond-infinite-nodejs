const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.listen(8090, function(){
    console.log(" Servidor inicializado \n URL http://localhost:8090");
});