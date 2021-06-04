const mongoose = require("mongoose")
// Config Mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/oibj", {
	useNewUrlParser: true,
	 useUnifiedTopology: true
}).then(() => {
	console.log("Mongodb Conectado")
}).catch((err) => {
	console.log("Houve um erro ao se conectar" + err)
})


// Model Usuarios
//Definindo Model
const UsuarioSchema = mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	sobrenome: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true
	}
})

//Collection
mongoose.model('usuarios', UsuarioSchema)

const Test = mongoose.model('usuarios')

new Test({
	nome: "test",
	sobrenome: "test",
	email: "any_@email.com"
}).save().then(() => {
	console.log("Usuário criado com sucesso!")
}).catch((err) => {
	console.log("Erro#######" + err)
})