// Requerimientos

// 1.- Leer el archivo inventors.json
// 2.- Insertar un inventor nuevo
// 3.- Escribir en el archivo inventors.json
// 4.- Leer el archivo y mostarlo en consola
// de forma asincrona

const fs = require('fs');
const path = '.././filesystem/inventors.json';

// 1.- Leer archivo
fs.readFile(path,'utf8', (error, data) =>{
    if(!error){
        data = JSON.parse(data);
        // 2.- insertar un nuevo inventor
        data.inventors.push({
            first: "René",
		    last: "Favarolo",
		    year: 1923 
        });
        // 3.- Escribir archivo
        fs.writeFile(path, JSON.stringify(data, null, ' '), error => {
            if(!error){
                // 4.- Lectura de archivo
                fs.readFile(path, 'utf8', (error, data) => {
                    if(!error){
                        console.log(JSON.parse(data));
                    }
                });
            }
        });
    }
});