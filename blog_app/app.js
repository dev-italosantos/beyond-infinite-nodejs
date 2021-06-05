//Carregando módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
//const mongoose = require('mongoose')
const app = express()

//Configurações
	
	//Body Parser
	app.use(bodyParser.urlencoded({extended: true}))
	app.use(bodyParser.json())
	
	//Handlebars
	app.engine('handlebars', handlebars({ extname: 'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }))
	app.set('view engine', 'handlebars')

//Outros
const PORT =  8190
app.listen(PORT, () => {
	console.log("Servidor inicializado!")
})
