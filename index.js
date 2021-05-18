const express = require("express");
const app = express();
const Sequelize =  require('sequelize');
const handlebars = require('express-handlebars')


 
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

const sequelize = new Sequelize('nasa', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})

app.get('/usuarios', function(req, res){
    res.render('form')
})

app.listen(8090, function(){
    console.log(" Servidor inicializado \n URL http://localhost:8090");
});