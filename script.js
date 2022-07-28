
let nombre;
let apellido;
let titulo;

function credencial(titulo, nombre, apellido) {
    prompt("Usted está por crear su credencial para ingresar al recinto. Para continuar presione enter")
    nombre = prompt("Ingrese su nombre")
    apellido = prompt("Ingrese su apellido")
    titulo = prompt("Ingrese su titulo")
    alert (` Esta es su credencial: ${titulo + " " + nombre + " " + apellido}`);
  }
  
  credencial()
