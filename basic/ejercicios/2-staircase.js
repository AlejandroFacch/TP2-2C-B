
function escalera(n){
    let simbolos = new Array(n).fill(" ");

    for (let index = 0; index < n; index++) {
            
        simbolos.shift();
        simbolos.push("#");

        console.log(simbolos.join(""));
            
    }
}

escalera(6);