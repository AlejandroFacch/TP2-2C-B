const fs = require('fs');

const path = './texto.txt';

let datos = fs.readFileSync(path, 'utf-8');

console.log(datos);

datos += 'quiero una 🍕';

const path2 = './texto2.txt';

fs.writeFileSync(path2, datos);
console.log('OK');


