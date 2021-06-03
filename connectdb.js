const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/oibj", {
	useNewUrlParser: true,
	 useUnifiedTopology: true
}).then(() => {
	console.log("Mongodb Conectado")
}).catch((err) => {
	console.log("Houve um erro ao se conectar" + err)
})