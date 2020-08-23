function sumaArray(array){

    let suma = 0;

    for (let index = 0; index < array.length; index++) {
    
        suma += array[index];
    }

    return console.log(suma);

}

let enteros = [1,2,3];

sumaArray(enteros);
