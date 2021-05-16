const Sequelize =  require('sequelize')
const sequelize = new Sequelize('nasa', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})

/*

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Erro ao conectar server" + erro)
})

*/

const Usuario = sequelize.define('usuarios', {
    name: {
        type: Sequelize.STRING
    },
    surname: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    Age: {
        type: Sequelize.INTEGER
    }
})

Usuario.sync({force: true})