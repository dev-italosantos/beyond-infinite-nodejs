const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem-vindo Italo Santos ao App!");
});

app.listen(8090, function(){
    console.log(" Servidor inicializado \n URL http://localhost:8090");
});