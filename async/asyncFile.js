const fs = require('fs');
const path = '.././filesystem/bigfile1.txt';

fs.readFile(path,'utf-8',(err, data) => {
    if(err){
        console.log(err.message);
    }
    else {
        console.log(data);
        console.log('======== FIN DE ARCHIVO =======');
    }
});



