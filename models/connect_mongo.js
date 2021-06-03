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