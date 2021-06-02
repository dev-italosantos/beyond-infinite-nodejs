const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser');
const Post = require('./models/Post')
 
app.engine('handlebars', handlebars({ extname: 'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(req, res) {
   Post.findAll().then(function(posts){
      res.render('home.handlebars', {posts: posts})   
   })
})

app.get('/form', function(req, res){
 res.render('formulario.handlebars')
})

app.post('/add', function(req, res){
 Post.create({
    título: req.body.títle,
    conteudo: req.body.conteudo
 }).then(function() {
    res.redirect('/')
 }).catch(function(erro) {
    res.send("Houve um erro:" + erro)
 })
})

app.get('/deletar/:id', function(req, res) {
   Post.destroy({where: {'id': req.params.id}}).then(function(){
      res.send("Postagem deletada com sucesso!")
   }).catch(function(erro){
      res.send("Está postagem não existe!")
   })
})

app.listen(8090, function(){
    console.log(" Servidor inicializado \n URL http://localhost:8090");
});