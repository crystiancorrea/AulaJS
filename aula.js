let http = require("http");
let server = http.createServer(
    function(request,response) {
        response.writeHead(200, {});
        console.log("Primeira requisição");
        response.end();
    }
)

server.listen(3000);
console.log("Servidor em execução");
