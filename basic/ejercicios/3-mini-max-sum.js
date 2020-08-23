let numeros = [1,3,5,7,9];

function maximo(array){

    let numeroMinimo = Math.min(...array);
    let suma = 0;
    for (let index = 0; index < array.length; index++) {
        
        if(array[index] != numeroMinimo){
            suma = suma + array[index];
        }
        
    }
    return console.log(suma);
}

function minimo(array){

    let numeroMaximo = Math.max(...array);
    let suma = 0;
    for (let index = 0; index < array.length; index++) {
        
        if(array[index] != numeroMaximo){
            suma = suma + array[index];
        }
        
    }
    return console.log(suma);
}

maximo(numeros);
minimo(numeros);