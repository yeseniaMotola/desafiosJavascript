//Variables
 let portal = document.getElementById('portal');
 let michiball = document.getElementById('michiball');
 let puntos = document.querySelector('#puntos span');
 let contador = 0

//funciones para mover el portal

function moveLeft(){
  let portalLeft = parseInt(window.getComputedStyle(portal).getPropertyValue('left'));
  portalLeft -= 25
  if(portalLeft >= -360){
    portal.style.left = portalLeft + 'px';
  }
}

function moveRight(){
  portalLeft = parseInt(window.getComputedStyle(portal).getPropertyValue('left'));
  portalLeft += 25
  if(portalLeft < 370){
    portal.style.left = portalLeft + 'px';
  }
}

//Mover el portal con teclas

document.addEventListener("keydown", function(e){
  if(e.key === "ArrowLeft"){
    moveLeft()
  }
  if(e.key === "ArrowRight"){
    moveRight()
  }
})

//Generar michiballs aleatoriamente

setInterval(function(){
  let numeroAleatorio = Math.floor(Math.random() * 26) * 30
  michiball.style.left = numeroAleatorio + 'px'
  console.log(numeroAleatorio)
},1700)

//Contar puntos y terminar el juego cuando no se atrape

let contarPuntos = setInterval(function(){
  
  puntos.innerHTML = contador

  contador++;

  let michiballTop = parseInt(window.getComputedStyle(michiballTop).getPropertyValue('top'))
  let portalTop = parseInt(window.getComputedStyle(portalTop).getPropertyValue('top'))
  let michiballLeft = parseInt(window.getComputedStyle(michiballLeft).getPropertyValue('left'))
  let portalLeft = parseInt(window.getComputedStyle(portalLeft).getPropertyValue('left'))
  
  if((michiballTop > 480) && (michiballTop < 500)){
    if(portalLeft == michiballLeft){
      
    } else {
      alert("GAME OVER");
      clearInterval(contarPuntos)
      contador = 0
      michiball.style.animation = 'none';
    }
  }
},50)




