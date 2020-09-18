const http = require('http');

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h2>Hola mundo HTTP!!!!</h2>');
    res.end();
}).listen(3000,'127.0.0.1', ()=>{
    console.log("Servidor Web iniciando y escuchando el puerto 3000");
});