

class Grupo {
  constructor(nombre, apellido, edad) {
      this.nombre = nombre
      this.apellido = apellido
      this.edad = edad
  }
}

const botonEnviar = document.getElementById("boton")

let array = []

botonEnviar.addEventListener("click", (e) => {
  e.preventDefault()

  let nombre = document.getElementById("nombre").value
  let apellido = document.getElementById("apellido").value
  let edad = document.getElementById("numero").value

  const grupo1 = new Grupo(nombre, apellido, edad)
  array.push(grupo1)
  localStorage.setItem('alumno', JSON.stringify(array))
})