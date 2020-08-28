const fs = require('fs');

const path = './inventors.json';

let datos = fs.readFileSync(path, 'utf-8');

datos = JSON.parse(datos);

//console.log(inventors.inventors[0]);

// Ejercicio
// Leer el archivo Inventors.json
// agregar un inventor
// escribir el archivo incluyendo el nuevo inventor

const inventor = {first: 'Juan', last: 'Perez', year: 1978};

datos.inventors.push(inventor);

datos = JSON.stringify(datos, null, "  ");

// se escribe el archivo json
fs.writeFileSync(path, datos);


