function catAndMouse(x, y, z){

    let distanciaGato1 = Math.abs(z-x);
    let distanciaGato2 = Math.abs(z-y);
    let mensaje;

    if(distanciaGato1 == distanciaGato2){
        mensaje = "Mouse C";
    }else if(distanciaGato1 < distanciaGato2){
        mensaje = "CAT A";
    }else {
        mensaje = "CAT B";
    }

    return mensaje;

}

let x = 1;
let y = 2;
let z = 3;

console.log(catAndMouse(x,y,z));

y = 3;
z = 2;

console.log(catAndMouse(x,y,z));

x = 2;
y = 5;
z = 3;

console.log(catAndMouse(x,y,z));