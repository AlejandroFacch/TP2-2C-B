// Router, end point
// localhost:3000/api/inventors

const http = require('http');
const PORT = 3000;
const chalk = require('chalk');
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

  http.createServer((req, res) =>{
    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(`
                <html>
                    <head></head>
                    <body>
                        HOME DE API REST
                    </body>
                </html>
            `);    
            break;
        case '/api/inventors':
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(inventors));
            break
        default:
            res.writeHead(404,{'Content-Type': 'text/html'});
            res.write('no se encontro el access point');
            break;
    }
    res.end();
}).listen(PORT,'127.0.0.1', ()=>{
    console.log(chalk.blue.bgGreenBright(`Servidor Web iniciando y escuchando el puerto ${PORT}`));
});