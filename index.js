const express = require("express");
const app = express();
const Sequelize =  require('sequelize');
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser');

 
app.engine('handlebars', handlebars({ extname: 'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }))
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const sequelize = new Sequelize('nasa', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
});
 
app.get('/usuarios', function(req, res){
 res.render('formulario.handlebars');
});

app.post('/add', function(req, res){
    res.send("Nome: " + req.body.name + " Sobrenome: " + req.body.sobrenome);
});

app.listen(8090, function(){
    console.log(" Servidor inicializado \n URL http://localhost:8090");
});