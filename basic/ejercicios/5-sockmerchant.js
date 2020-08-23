function duplas(array){

    
    let numero2 = 0;
    let index = 0;
    let pares = 0;
    let numero1 = array.shift();
    
    while(array.length != 0){

        numero2 = array[index];

        if(numero1 == numero2){
            array.shift();
            pares++;
            if(array.length >= 2){
                numero1 = array.shift();
                index = 0;
            }
        }else if (array.length == index && array.length > 0){
            index = 0;
            numero1 = array.shift();
        }else{
            index++;
        }
        
    }

    return console.log(pares);

}




let enteros = [10, 20, 20, 20, 20, 30, 50, 10, 20];
duplas(enteros);