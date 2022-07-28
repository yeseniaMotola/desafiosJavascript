let cantFamiliares = parseInt(prompt("Ingrese la cantidad de personas que hay en su núcleo familiar:"));
let edad; 
let sumaEdades = 0; //acumulador
let i; //contador

function promedio(){

for (i=1; i<=cantFamiliares; i++){
    edad = parseInt(prompt("Por favor, ingrese la edad del familiar n° " + i));

    sumaEdades = sumaEdades + edad;
}

alert(`La edad promedio de su núcleo familiar es de ${sumaEdades / cantFamiliares} años.`);
}

