function promedioEdadFamiliar(){
    
let cantFamiliares = parseInt(prompt("Ingrese la cantidad de personas que hay en su núcleo familiar:"));

/*if (cantFamiliares === 0 ){
    do {
    cantFamiliares === parseInt(prompt("Por favor, ingrese un número válido"));

} while (isNaN(cantFamiliares));
}*/

let edad; 
let sumaEdades = 0; //acumulador
let i; //contador

for (i=1; i<=cantFamiliares; i++){
    edad = parseInt(prompt("Por favor, ingrese la edad del familiar n° " + i));

    /*do {
        edad = parseInt(prompt("Por favor, ingrese un número válido para la edad del familiar n° "  + i));
    
    } while (isNaN(edad));*/

    sumaEdades = sumaEdades + edad;
}

alert(`La edad promedio de su núcleo familiar es de ${sumaEdades / cantFamiliares} años.`);
}
promedioEdadFamiliar()


/*function cuidadoSegun(dia) {
    if (dia === "lunes") {
      return "fertilizar";
    }  else  if (dia === "viernes") {
      return "fumigar";
    } else {
      return "regar";
    } 
  }
  */

