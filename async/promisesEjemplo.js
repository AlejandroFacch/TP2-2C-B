// Requerimientos

// 1.- Leer el archivo inventors.json
// 2.- Insertar un inventor nuevo
// 3.- Escribir en el archivo inventors.json
// 4.- Leer el archivo y mostarlo en consola
// de forma asincrona
const fs = require('fs').promises
const path = '.././filesystem/inventors.json';

async function operacionesInventores(){
    try {
        // 1.- Leer el archivo
    let data = await fs.readFile(path,'utf-8');
    data = JSON.parse(data);
    // 2.- Insertar inventor
    data.inventors.push({
        first: "Ladislao",
        last: "Biro",
        year: 1899
    });
    // 3.- Actualizar el archivo
    await fs.writeFile(path, JSON.stringify(data, null, " "));

    // 4.- Leer archivo actualizado
    console.log(await fs.readFile(path, 'utf-8'));
    } catch (error) {
        console.log(error);
    }
    
}
operacionesInventores();