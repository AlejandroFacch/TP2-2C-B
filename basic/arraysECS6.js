const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

  // Nombre         Apellido        Año nacimiento
  //==============================================
  //

  function print(inventors){
      console.log(`Nombre       Apellido       Año`);
      console.log(`===============================`);

      inventors.forEach(inventor => {
          console.log(`${inventor.first.padEnd(13,' ')}${inventor.last.padEnd(14,' ')}${inventor.year}`);
      });
  }

//print(inventors);

// Ejercicio
// 1.- Filtrar los inventores nacidos despues del 1800
console.log('Ejercicio 1.-');
print(inventors.filter(inventor => inventor.year > 1800));

print(inventors.filter(
    function (inventor){
        return inventor.year > 1800;
    }
));

// Ejercicio 2
// 2.- Convertir el apellido en mayusculas
console.log('Ejercicio 2.-');
print(inventors.map(inventor => 
    ({first: inventor.first, last: inventor.last.toUpperCase(), year: inventor.year })
));

// Ejercicio 3
// Filtro anterior y el apellido en mayusculas
console.log('Ejercicio 3.-');
print(
    inventors
    .filter(inventor => inventor.year > 1800)
    .map(inventor => ({first: inventor.first, last: inventor.last.toUpperCase(), year: inventor.year }))
);

// Ejercicio 4
// Buscar el inventor de apellido Kepler y retornar el objeto
console.log();
console.log("Ejercicio 4.-");
console.log(
    inventors.find(inventor => inventor.last === "Kepler")
);


