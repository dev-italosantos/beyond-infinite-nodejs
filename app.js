var http = require('http');

http.createServer(function(req, res){
    res.end("Hollar Italo Santos, my biens!")
}).listen(9091);

console.log("Servidor Inicializou!");