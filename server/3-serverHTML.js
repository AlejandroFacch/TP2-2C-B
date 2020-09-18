// Lea un archivo HTML
// haga response con el contenido
// que me permita reemplazar parte del contenido del html

const fs = require('fs');
const http = require('http');
const chalk = require('chalk');
const PORT = 3000;

http.createServer((req, res) =>{
    try {
        let html = fs.readFileSync('./index1.htm','utf-8');
        res.writeHead(200, {'Content-Type': 'text/html'});
        html = html.replace('{mensaje}', 'Hola mundo del template');
        res.write(html);
    } catch (error) {
        res.writeHead(500,{'Content-Type': 'text/html'});
        res.write('Error interno');
    }
    
    res.end();
}).listen(PORT,'127.0.0.1', ()=>{
    console.log(chalk.blue.bgGreenBright(`Servidor Web iniciando y escuchando el puerto ${PORT}`));
});